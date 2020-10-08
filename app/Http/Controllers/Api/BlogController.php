<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Blog;

class BlogController extends Controller
{
    public function index() {
        $blogs = Blog::paginate(50);
        return $blogs;   
    }

    public function store(Request $request){
        $blogs = new Blog();

        $blogs->title = $request->category_name;
        $blogs->created_at = Carbon::now();
        $blogs->updated_at = Carbon::now();

        if ($blogs->save()){
            return ['status' => 201];
        }else{
            return ['status' => 304];
        }
    }

    public function edit($id) {
        $blog = Blog::find($id);
        return response()->json($blog);
    }

    public function update($id,Request $request) {
        $blogs = Blog::find($id);
        $blogs->title = $request->category_name;
        $blogs->updated_at = Carbon::now();

        if ($blogs->save()){
            return ['status' => 201];
        }else{
            return ['status' => 304];
        }

    }

    public function destroy($category_id) {
        $blog = Blog::find($category_id);

        if ($blog->delete()){
            return ['status' => 201];
        }else{
            return ['status' => 304];
        }
    }
}
