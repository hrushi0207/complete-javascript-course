console.log('importing controller.js')



import * as model from './model.js'
import recipeView  from './views/recipeView.js';
import searchView  from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import {async} from 'regenerator-runtime'

// if(module.hot){
//   module.hot.accept()
// }


const controlRecipe = async function(){
  
  try{
    
    const id =window.location.hash.slice(1)
    
    if(!id) return;
    
    recipeView.renderSpinner()

    // 0)update results view to mark selected search result
    resultView.update(model.getSearchResultsPage())
    
    // 1) updating bookmarks view
    bookmarksView.update(model.state.bookmarks)

    // 2) Loading recipe
    await model.loadRecipe(id)
    
    
    
    // 3) rendering recipe
    recipeView.render(model.state.recipe)
    
    
  }
  catch(err){
    recipeView.renderError(`${err} 😒😒😒`)
  }
  
}











const controlSearchResults = async function(){
    try{

      resultView.renderSpinner()

      // 1)get Search query
        const query = searchView.getQuery()
        if(!query) return


      // 2)load search results
        await model.loadSearchResults(query)
        
        
      // 3) render results 
      // resultView.render(model.state.search.results)
      resultView.render(model.getSearchResultsPage())


      // 4) render initial  pagination buttons
      paginationView.render(model.state.search)

    }
    catch(err){
      console.log(err)
    }
}
// controlSearchResults()












const controlPagination= function(goToPage){
 
 
  // 1) render NEW results 
  resultView.render(model.getSearchResultsPage(goToPage))


  // 2) render NEW  pagination buttons
  paginationView.render(model.state.search)

}




const controlServings = function(newServings){

  // update the recipe servings (in state)
  model.updateServings(newServings)


  // update the recipe view 
  // recipeView.render(model.state.recipe)
  recipeView.update(model.state.recipe)
}








const controlAddBookmark = function(){
  // 1) Add /remove bookmarks
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe)
  else model.deleteBookmark(model.state.recipe.id)

  // 2)update recipe view
  recipeView.update(model.state.recipe) 

  // 3)render bookmarks
  bookmarksView.render(model.state.bookmarks)

}



const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks)
}


const controlAddRecipe = function(newRecipe){
  console.log(newRecipe) 

  // upload new Recipe data
}





// controlRecipe()
const init = function(){
  bookmarksView.addHandlerRender(controlBookmarks)
  recipeView.addHandlerRender(controlRecipe)
  recipeView.addHandlerUpdateServings(controlServings)
  recipeView.addHandlerAddBookmark(controlAddBookmark)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
  addRecipeView.addHandlerUpload(controlAddRecipe)
}
init()
// ['hashchange','load'].forEach(ev => window.addEventListener(ev,controlRecipe))
// window.addEventListener('hashchange',controlRecipe)
// window.addEventListener('load',controlRecipe)




