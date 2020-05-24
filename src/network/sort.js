import {request} from './request'

export function getNavbarsData() {
  return request({
    url: '/data/category/category.json'
  })
}

export function getNavbarsList(key){
  return request({
    url:'/data/category/subcategory/'+key+'.json'
  })
}
