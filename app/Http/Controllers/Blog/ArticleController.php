<?php

namespace App\Http\Controllers\Blog;

use Illuminate\Http\Request;
use Illuminate\Session\DatabaseSessionHandler;
use League\HTMLToMarkdown\HtmlConverter;
use App\Common\MyUpload;
use App\BlogModel\Article;
use App\BlogModel\Comment;
use App\BlogModel\Tag;
use App\User;
use App\BlogModel\Search;
use Auth;

class ArticleController extends Controller
{
    /**
     * 跳转全部文章页
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function list()
    {
        $articles = Article::where('is_hidden', 0)->orderBy('is_top','desc')->orderBy('created_at', 'desc')->paginate(8);
        foreach ($articles as $article) {
//          $article->cover = imageURL($article->cover);
            $article->content = \Illuminate\Support\Str::limit(strip_tags($article->content_html), 150);
            $article->created_at_date = $article->created_at->toDateString();
            $article->updated_at_diff = $article->updated_at->diffForHumans();
            $article->tags;
        }

        $tags = Tag::all();
        return compact('articles', 'tags');
    }

    /**
     * 搜索文章
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        $key = $request->key;

        // 保存（更新）搜索关键词
        $search = Search::where('name', $key)->first();
        if (!$search) {
            $search = new Search;
            $search->name = $key;
            $search->save();
        }
        $search->increment('search_num');

        $articles = Article::when($key, function($query) use ($key){
            return $query->where('title', 'like', '%'.$key.'%');
        })->where('is_hidden', 0)->orderBy('created_at', 'desc')->paginate(10);
        foreach ($articles as $article) {
            $article->cover = imageURL($article->cover);
            $article->content = \Illuminate\Support\Str::limit(strip_tags($article->content_html), 150);
            $article->created_at_date = $article->created_at->toDateString();
            $article->updated_at_diff = $article->updated_at->diffForHumans();
        }

        $searches = Search::where('search_num', '>', 1)->orderBy('search_num')->limit(10)->get();
        return view('articles.list', compact('articles', 'searches'));
    }

    /**
     * 跳转某篇文章
     *
     * @return array
     */
    public function show(Request $request, $id)
    {
        $article = Article::findOrFail($id);
        $article->increment('view');
        //不返回，只记录浏览量
        //$article->created_at_date = $article->created_at->toDateString();

        //return view('articles.show', compact('article', 'comments', 'input'));
        //return compact('article');
    }

}
