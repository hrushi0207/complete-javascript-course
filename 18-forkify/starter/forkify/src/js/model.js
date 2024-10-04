console.log('Exporting model')


import {async} from 'regenerator-runtime'
import { API_URL, RES_PER_PAGE } from './config.js'
import { getJSON } from './helper.js'

export const state = {
    recipe : {},
    search : {
        query : '',
        results : [],
        resultsPerPage : RES_PER_PAGE,
        page:1
    },
    bookmarks : []
}


export const  loadRecipe = async function(id){
    try {

        
        const data = await getJSON(`${API_URL}${id}`)
        
        const  {recipe} = data.data
            
        state.recipe = {
        id : recipe.id,
        title : recipe.title,
        publisher : recipe.publisher,
        sourceUrl : recipe.sourceUrl,
        image : recipe.image_url,
        servings : recipe.servings,
        cookingTime : recipe.cooking_time,
        ingredients : recipe.ingredients
        }
    

        if(state.bookmarks.some(bookmark => bookmark.id === id)) state.recipe.bookmarked = true
        else state.recipe.bookmarked = false
    
    console.log(state.recipe)
    }

    catch(err){
         console.error(`${err} 🔴🔴🔴🔴`)
         throw err
    }


} 


export const loadSearchResults = async function(query){
    try {
        state.search.query = query


        const data = await getJSON(`${API_URL}?search=${query}`)
        console.log(data)



        state.search.results = data.data.recipes.map(rec =>{
           return { id : rec.id,
            title : rec.title,
            publisher : rec.publisher,
            sourceUrl : rec.sourceUrl,
            image : rec.image_url}
        })

        state.search.page = 1;
    }
    catch(err){
       console.error(`${err} 🤦‍♂️🤦‍♂️🤦‍♂️🤦‍♂️`)
       throw err 
    }
}

export const getSearchResultsPage = function(page = state.search.page){
    state.search.page = page

    const start = (page-1) * state.search.resultsPerPage;
    const end  = (page) * state.search.resultsPerPage;

    return state.search.results.slice(start, end)

}


export const updateServings = function(newServings){
        console.log(state.recipe)
        state.recipe.ingredients.forEach(ing=>{
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings
        // newQt = oldQt * newServings/oldServings // 2 * 8/4=4
    })

    state.recipe.servings = newServings
}




const persistBookmarks = function(){
    localStorage.setItem('bookmarks',JSON.stringify(state.bookmarks))
}



export const addBookmark = function(recipe){
    
    // Add Bookmark
    state.bookmarks.push(recipe)

    // mark current recipe as bookmark 
    if(recipe.id === state.recipe.id) state.recipe.bookmarked = true
    persistBookmarks()
}



export const deleteBookmark = function(id){
    // Delete bookmark
    const index = state.bookmarks.findIndex(el=>el.id===id)
    state.bookmarks.splice(index, 1)
    
    
    // mark current recipe as not bookmark 
    if(id === state.recipe.id) state.recipe.bookmarked = false
    persistBookmarks()
}


const init= function(){
    const storage = localStorage.getItem('bookmarks')
    if(storage) state.bookmarks = JSON.parse(storage)
}
init()



const clearBookmarks = function(){
    localStorage.clear('bookmarks')
}
// clearBookmarks()