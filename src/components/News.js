import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class News extends Component {
  
  static defaultProps = {
   country: 'us',
   pageSize: 8 
  }
  static propTypes = {
   country:PropTypes.string,
   pageSize: PropTypes.number,
  }
  constructor(){
    super();
    this.state ={
      articles: [],
      loading : true,
      page: 1

    }
  }
async componentDidMount(){
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f05adb2372a46429f8aef71f43f7790&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,
      loading:false
     })

  }
    handlePrevious = async() =>
   {
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f05adb2372a46429f8aef71f43f7790&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
     let data = await fetch(url);
     let parsedData = await data.json();
    
      this.setState  ({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading:false
   })
   }
     handleNext = async() =>
   { if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))
   {

   }
   else

    {let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=5f05adb2372a46429f8aef71f43f7790&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true}); 
    let data = await fetch(url);
     let parsedData = await data.json();
    
      this.setState  ({
            page: this.state.page+1,
            articles: parsedData.articles,
            loading: false
      })}
   }
  render() {
    return (
      <div>
        <div className='container'>
         <h1 className='text-center' style = {{margin: '35px'}}>NewsFlux  - Top headLines</h1>
                   {this.state.loading && <Spinner />} 

          <div className='row'>
                      {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className='col-md-4' key = {element.url} >
            <NewsItems  title={element.title} description={element.description} imgUrl ={element.urlToImage} newsUrl = {element.url} author = {element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
             })}

          </div>
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button"  onClick={this.handlePrevious} className="btn btn-dark"> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}
 