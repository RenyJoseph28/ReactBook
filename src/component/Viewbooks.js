import React from 'react'
import Navebar from './Navebar'

const Viewbooks = () => {
    var booklist=[{"title":"wings of fire",
                  "price":"200",
                   "author":"APJ",
                    "image": 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg'},
{"title":"maccbeth","price":"500","author":"shakespear",
"image":'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip'},
{"title":"Abc","price":"200","author":"reny",
"image":'https://images.indianexpress.com/2020/04/books_1200.jpg?w=389'}
]
  return (
    <div>
        <Navebar/>
        <div className='container'>
            <div className='row'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                    <div className='row'>
                        <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                            <div className='row'>
                                {booklist.map ((value,key) => {
                                 return <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                                <div class="card">
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">Author:{value.author}</p>
    <a href="#" class="btn btn-primary">buy book</a>
  </div>
</div>
                                 </div>   
                                 })}
                            </div>

                        </div>
                    </div>
               
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default Viewbooks