document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const userTableBody = document.querySelector('#userTable tbody');
    const currentImagePreview = document.getElementById('currentImagePreview');
    const imageInput = document.getElementById('imagen');
    const currentImageNameDisplay = document.getElementById('currentImageName'); // Nuevo elemento para mostrar el nombre del archivo

    let users = []; 

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
                return;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function renderUsers() {
        userTableBody.innerHTML = '';
        users.forEach((user, index) => {
            const row = userTableBody.insertRow();
            row.insertCell(0).textContent = user.documento;
            row.insertCell(1).textContent = user.nombre;
            row.insertCell(2).textContent = user.apellidos;
            row.insertCell(3).textContent = user.fechaNacimiento;
            row.insertCell(4).textContent = user.email;
            
            const imgCell = row.insertCell(5);
            if (user.imagen) { 
                const img = document.createElement('img');
                img.src = user.imagen; 
                img.alt = "Imagen de usuario";
                img.style.maxWidth = '50px';
                img.style.maxHeight = '50px';
                imgCell.appendChild(img);
            } else {
                imgCell.textContent = 'No image';
            }

            const actionsCell = row.insertCell(6);
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', () => editUser(index));
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => deleteUser(index));
            actionsCell.appendChild(deleteButton);
        });
    }

    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(userForm);
        
        const selectedFile = imageInput.files[0]; 
        let imageDataBase64 = null;
        let imageFileName = null;

        if (selectedFile) {
            imageDataBase64 = await fileToBase64(selectedFile);
            imageFileName = selectedFile.name; // Guardamos el nombre del archivo
        }

        const newUser = {
            documento: formData.get('documento'),
            nombre: formData.get('nombre'),
            apellidos: formData.get('apellidos'),
            fechaNacimiento: formData.get('fechaNacimiento'),
            email: formData.get('email'),
            imagen: imageDataBase64,
            imageName: imageFileName // Guardamos el nombre del archivo
        };

        const existingIndex = users.findIndex(u => u.documento === newUser.documento);
        if (existingIndex > -1) {
            if (!newUser.imagen) { // Si no se seleccionó una nueva imagen
                newUser.imagen = users[existingIndex].imagen; // Mantenemos la imagen existente (Base64)
                newUser.imageName = users[existingIndex].imageName; // Mantenemos el nombre de la imagen existente
            }
            users[existingIndex] = newUser; 
        } else {
            users.push(newUser); 
        }
        
        renderUsers();
        userForm.reset();
        currentImagePreview.innerHTML = 'No hay imagen seleccionada.';
        currentImageNameDisplay.textContent = ''; // Limpiar el nombre del archivo
    });

    clearButton.addEventListener('click', () => {
        userForm.reset();
        currentImagePreview.innerHTML = 'No hay imagen seleccionada.';
        imageInput.value = '';
        currentImageNameDisplay.textContent = ''; // Limpiar el nombre del archivo
    });

    function editUser(index) {
        const userToEdit = users[index];
        document.getElementById('documento').value = userToEdit.documento;
        document.getElementById('nombre').value = userToEdit.nombre;
        document.getElementById('apellidos').value = userToEdit.apellidos;
        document.getElementById('fechaNacimiento').value = userToEdit.fechaNacimiento;
        document.getElementById('email').value = userToEdit.email;
        
        imageInput.value = ''; // Limpiar el input de archivo (por seguridad)

        currentImagePreview.innerHTML = ''; 
        if (userToEdit.imagen) { 
            const img = document.createElement('img');
            img.src = userToEdit.imagen; 
            img.alt = "Imagen actual";
            currentImagePreview.appendChild(img);
        } else {
            currentImagePreview.textContent = 'No hay imagen seleccionada.';
        }

        // Mostrar el nombre de la imagen actual (si existe)
        if (userToEdit.imageName) {
            currentImageNameDisplay.textContent = `Archivo actual: ${userToEdit.imageName}`;
        } else {
            currentImageNameDisplay.textContent = '';
        }
    }

    function deleteUser(index) {
        if (confirm('¿Está seguro de que desea eliminar este usuario?')) {
            users.splice(index, 1);
            renderUsers();
            userForm.reset(); 
            currentImagePreview.innerHTML = 'No hay imagen seleccionada.';
            currentImageNameDisplay.textContent = ''; // Limpiar el nombre del archivo
        }
    }

    imageInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) {
            const base64 = await fileToBase64(file);
            currentImagePreview.innerHTML = ''; 
            const img = document.createElement('img');
            img.src = base64;
            img.alt = "Nueva imagen";
            currentImagePreview.appendChild(img);
            currentImageNameDisplay.textContent = `Archivo seleccionado: ${file.name}`; // Mostrar el nombre del nuevo archivo
        } else {
            currentImagePreview.innerHTML = 'No hay imagen seleccionada.';
            currentImageNameDisplay.textContent = '';
        }
    });

    renderUsers();
});