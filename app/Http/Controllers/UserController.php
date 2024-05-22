<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // dd('hello');
        $query = User::query();

        $sortField = request("sort_field", "created_at");
        $sortDirector = request("sort_direction", "desc");

        if(request("name")){
            $query->where("name", "like", "%". request("name") ."%");
        }

        if(request("email")){
            $query->where('email', request("email"));
        }

        $users = $query->orderBy($sortField, $sortDirector)->paginate(10)->onEachSide(1);
        return inertia('User/Index',[
            'users' => UserResource::collection($users),
            'queryParams' => request()->query() ?: null,
            'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('User/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        User::create($data);

        return to_route('user.index')
            ->with('success', 'User was created');

    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit',[
            'user' => new UserResource($user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->validated();
        $password = $date['password'] ?? null;
        if($password){
            $data['password'] = bcrypt($password);
        }else{
            unset($data['password']);
        }

        $user->update($data);

        return to_route('user.index')
            ->with('success', 'User was updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
