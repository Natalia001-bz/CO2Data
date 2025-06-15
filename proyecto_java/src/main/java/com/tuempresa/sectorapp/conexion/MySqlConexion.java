package com.tuempresa.sectorapp.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MySqlConexion {

    private static final String URL = "jdbc:mysql://localhost:3306/emisiones_co2"; // Asignar Nombre BD
    private static final String USER = "root"; // Cambiar según configuración XAMPP
    private static final String PASSWORD = ""; // Cambiar según configuración XAMPP

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }

    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            System.out.println("Conexión a MySQL exitosa!");
        } catch (SQLException e) {
            System.err.println("Error conectando a MySQL: " + e.getMessage());
        }
    }
}
