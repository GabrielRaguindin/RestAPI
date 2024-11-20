import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import PaginationComponent from "./PaginationComponent";
import { Table, Button, Form, Stack, Modal, FloatingLabel } from "react-bootstrap";
import "../../../src/App.css";
import Service from "../../service/Service";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const retrieveUsers = () => {
        Service.getList()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        retrieveUsers();
    }, []);

    const handleEditClick = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleDeleteClick = (user) => {
        setSelectedUser(user);
        setShowDeleteModal(true);
    };

    const handleEditSave = (id) => {
        Service.updateUser(selectedUser, id)
            .then((response) => {
                console.log(response.data);
                retrieveUsers();
            })
            .catch((error) => {
                console.log(error);
            });
        setShowEditModal(false);
        retrieveUsers();
    };

    const handleDeleteConfirm = (id) => {
        Service.deleteUser(id)
            .then((response) => {
                console.log(response.data);
                retrieveUsers();
            })
            .catch((error) => {
                console.log(error);
            });
        setShowDeleteModal(false);
        retrieveUsers();
    };

    return (
        <div style={{ marginTop: "1rem" }}>
                <Stack direction="horizontal" gap={"5"} className="d-flex justify-content-center">
                    <div className="me-auto ms-5">
                        <h3 className="labels text-light bi bi-database" >
                            {" "}
                            User Data{" "}
                        </h3>
                    </div>
                    <div className="ms-auto me-5">
                        <Form.Control
                            className="input"
                            placeholder="Search User" />
                    </div>
                </Stack>

                <Table
                    borderless
                    hover
                    className="mx-auto table-dark table_style mt-3 align-middle">
                    <thead className="text-center">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Birthday</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-center">
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.birth}</td>
                                <td>
                                    <Button
                                        variant="warning me-2"
                                        className="edit_btn bi bi-vector-pen"
                                        id='editId'
                                        data-id={user.id}
                                        onClick={() => handleEditClick(user)}>
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="delete_btn bi-trash"
                                        onClick={() => handleDeleteClick(user)}>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                <PaginationComponent />

            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} data-bs-theme='dark'>
                <Modal.Header style={{ backgroundColor: '#FFC107' }}>
                    <Modal.Title className="labels text-dark">Edit User</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FloatingLabel controlId='floatingInput' label='Name' className='mb-3 labels'>
                            <Form.Control
                                type="text"
                                value={selectedUser ? selectedUser.name : ""}
                                onChange={(e) =>
                                    setSelectedUser({ ...selectedUser, name: e.target.value })}
                                className="labels input" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label='Email' className="mb-3 labels">
                            <Form.Control
                                type="email"
                                value={selectedUser ? selectedUser.email : ""}
                                onChange={(e) =>
                                    setSelectedUser({ ...selectedUser, email: e.target.value })}
                                className="labels input" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label='Phone Number' className="mb-3 labels">
                            <Form.Control
                                value={selectedUser ? selectedUser.phone : ""}
                                onChange={(e) => 
                                    setSelectedUser({ ...selectedUser, phone: e.target.value })}
                                className="labels input" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label='Birthday' className="labels">
                            <Form.Control
                                value={selectedUser ? selectedUser.birth : ""}
                                onChange={(e) => 
                                    setSelectedUser({ ...selectedUser, birth: e.target.value })}
                                className="labels input" />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" className='button labels' onClick={() => setShowEditModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="warning" className='edit_btn labels' onClick={() => handleEditSave(selectedUser.id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} data-bs-theme='dark'>
                <Modal.Header style={{ backgroundColor: '#DC3545' }}>
                    <Modal.Title className="text-light labels">Delete User</Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-light labels text-center">
                    Are you sure you want to delete this user?
                    <h5
                        style={{ fontWeight: '600' }}
                        className="labels mt-2">{" "}
                        {selectedUser && selectedUser.name}</h5>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" className="button labels" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" className='delete_btn labels' onClick={() => handleDeleteConfirm(selectedUser.id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Admin;