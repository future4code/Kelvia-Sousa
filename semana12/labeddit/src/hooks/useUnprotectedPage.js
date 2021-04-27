import {useLayoutEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {goToFeed} from '../routes/Coordinator';

export const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect (() => {
    const token = localStorage.getItem('token')
    if (token) {
      goToFeed(history)
    }
  }, [history])
}