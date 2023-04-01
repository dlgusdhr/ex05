import React, {useEffect, useState} from 'react'
import {Row, Col, Table} from 'react-bootstrap'


const PostsPage = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPosts = () => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setList(json)})
    }
    useEffect(() => {
        getPosts();
    },[]);

    if(loading) return <h1>로딩중입니ㅏdddddㄷ.</h1>

  return (
    <Row>
        <Col className='justify-content-center mx-3'>
        <h1 className="text-center my-5">게시글</h1>
        <Table striped bordered hover>
            <thead>
                <tr className='text-center'>
                    <td>ID.</td>
                    <td>Title</td>
                </tr>
                
            </thead>
            <tbody>
                {list.map(post=>
                    <tr key= {post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>)}
            </tbody>
        </Table>
        </Col>
    </Row>
  )
}

export default PostsPage