import {useParams} from 'react-router-dom';

import { Comments, } , React from '@hyvor/hyvor-talk-react';

function PostPage() {
    const {id} = useParams();
  return (
    <>
    <div>PostPage {id}</div>

   
        <Comments
            website-id={9332}
            page-id={id}
            />
    </>
  )  
};



export default PostPage