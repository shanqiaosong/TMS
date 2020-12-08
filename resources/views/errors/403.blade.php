@extends('errors::minimal')

@section('title', __('禁止的行为'))
@section('code', '403')
@section('message', __($exception->getMessage() ?: '禁止的行为'))
