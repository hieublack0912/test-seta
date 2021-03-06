import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, setPost } from '../../store/postSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { listPost } = useSelector((state) => state.post);
  if (!listPost.length) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((res) => {
        dispatch(setPost(res));
      });
  }

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className='App'>
      <div className='List-data'>
        <table class='table table-striped'>
          <thead>
            <tr>
              <th>UseId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {listPost.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.userId}</td>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='Form-add-data'>
        <div className='form-group'>
          <label for='exampleInputEmail1'>Title</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group mt-4'>
          <label for='exampleFormControlTextarea1'>Body</label>
          <textarea
            className='form-control'
            id='exampleFormControlTextarea1'
            rows='3'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <input
          type={'button'}
          className='btn btn-secondary mt-4'
          value='Submit'
          onClick={() =>
            dispatch(
              createPost({
                title: title,
                body: body,
              })
            )
          }
        />
      </div>
    </div>
  );
}

export default App;
