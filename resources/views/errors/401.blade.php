@extends('errors::minimal')

@section('title', __('未授权的行为'))
@section('code', '401')
@section('message',  $exception->getMessage() )
