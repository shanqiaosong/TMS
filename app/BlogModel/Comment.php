<?php


namespace App\BlogModel;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'user_id', 'article_id', 'parent_id', 'content', 'name', 'email', 'website', 'avatar', 'ip', 'city'
  ];

  /**
   * 获得此评论所属的文章。
   */
  public function article()
  {
      return $this->belongsTo('App\BlogModel\Article');
  }

  /**
   * 获得此评论所有的回复
   */
  public function replys()
  {
      return $this->hasMany('App\BlogModel\Comment', 'parent_id');
  }
}