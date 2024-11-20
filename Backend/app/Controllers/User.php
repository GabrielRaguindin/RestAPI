<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;
use App\Models\UserModel;

class User extends ResourceController
{
    /**
     * Return an array of resource objects, themselves in array format.
     *
     * @return ResponseInterface
     */
    public function index()
    {
        $model = new UserModel();
        $data = $model -> orderBy('id', 'DESC') -> findAll();

        return $this -> respond($data);
    }

    /**
     * Return the properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function show($id = null)
    {
        $model = new UserModel();
        $data = $model -> where('id', $id) -> first();
        if($data) {
            return $this -> respond($data);
        } else {
            return $this -> failNotFound('No user found with id ' . $id);
        }
    }

    /**
     * Return a new resource object, with default properties.
     *
     * @return ResponseInterface
     */
    public function new()
    {
        //
    }

    /**
     * Create a new resource object, from "posted" parameters.
     *
     * @return ResponseInterface
     */
    public function create()
    {
        $model = new UserModel();
        $data = [
            'name' => $this -> request -> getVar('name'),
            'email' => $this -> request -> getVar('email'),
            'phone' => $this -> request -> getVar('phone'),
            'birth' => $this -> request -> getVar('birth'),
            'password' => password_hash($this -> request -> getVar('password'), PASSWORD_DEFAULT),
        ];
        $model -> insert($data);
        $response = [
            'status' => 201,
            'error' => null,
            'messages' => [
                'success' => 'User created successfully'
                ]
            ];
        return $this -> respondCreated($response);
    }

    /**
     * Return the editable properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function update($id = null)
    {
        $model = new UserModel();
        $data = [
            'name' => $this -> request -> getVar('name'),
            'email' => $this -> request -> getVar('email'),
            'phone' => $this -> request -> getVar('phone'),
            'birth' => $this -> request -> getVar('birth'),
            'password' => password_hash($this -> request -> getVar('password'), PASSWORD_DEFAULT),
        ];
        $model -> update($id, $data);
        $response = [
            'status' => 200,
            'error' => null,
            'messages' => [
                'success' => 'User updated successfully'
            ]
        ];
        return $this -> respond($response);
    }

    /**
     * Delete the designated resource object from the model.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        $model = new UserModel();
        $data = $model -> where('id', $id) -> delete();
        if($data) {
            $model -> delete($id);
            $response = [
                'status' => 200,
                'error' => null,
                'messages' => [
                    'success' => 'User deleted successfully'
                ]
            ];
            return $this -> respondDeleted($response);
        } else {
            return $this -> failNotFound('No user found with id ' . $id);
        }
    }
}
