package com.tuempresa.sectorapp.service;

import com.tuempresa.sectorapp.model.Sector;
import com.tuempresa.sectorapp.repository.SectorRepository;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.*;

@Service
public class FileProcessingService {
    private final SectorRepository sectorRepository;

    public FileProcessingService(SectorRepository sectorRepository) {
        this.sectorRepository = sectorRepository;
    }

    public Map<String, Object> processFile(MultipartFile file) {
        Map<String, Object> report = new HashMap<>();

        try (InputStream is = file.getInputStream();
             Workbook workbook = WorkbookFactory.create(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            List<Sector> sectores = new ArrayList<>();

            for (Row row : sheet) {
                if (row.getRowNum() == 0) continue;

                Cell tipoCell = row.getCell(0);
                Cell valorCell = row.getCell(1);
                Cell unidadCell = row.getCell(2);

                if (tipoCell == null || valorCell == null || unidadCell == null) continue;

                String tipo = tipoCell.getStringCellValue();
                Double valor = valorCell.getNumericCellValue();
                String unidad = unidadCell.getStringCellValue();

                Sector sector = new Sector(tipo, valor, unidad);
                sectorRepository.save(sector);
                sectores.add(sector);
            }

            report.put("totalRegistros", sectores.size());

            Map<String, List<Double>> valoresPorTipo = new HashMap<>();
            for (Sector s : sectores) {
                valoresPorTipo.putIfAbsent(s.getTipo(), new ArrayList<>());
                valoresPorTipo.get(s.getTipo()).add(s.getValor());
            }

            Map<String, Double> promedioPorTipo = new HashMap<>();
            for (var entry : valoresPorTipo.entrySet()) {
                List<Double> valores = entry.getValue();
                double suma = valores.stream().mapToDouble(Double::doubleValue).sum();
                promedioPorTipo.put(entry.getKey(), suma / valores.size());
            }

            report.put("promedioPorTipo", promedioPorTipo);

        } catch (Exception e) {
            report.put("error", "Error procesando archivo: " + e.getMessage());
        }

        return report;
    }
}
