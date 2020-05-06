import {request} from './request'

export function getHomeMultidata(){
  return request({
    url:'/data/home/multidata/multidata.json'
  })
}

// 封装goods数据请求
export function getHomegoods(type,page){
  return request({
    url:'/data/home/data/'+type+"/"+page+'.json'
  })
}