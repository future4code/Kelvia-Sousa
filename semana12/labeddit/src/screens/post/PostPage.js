import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';

export const PostPage = () => {
  useProtectedPage()
  return (
    <div>
      PostPage
    </div>
  )
}