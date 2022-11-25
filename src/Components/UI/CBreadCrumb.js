import { Breadcrumb } from 'antd';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const CBreadCrumb = () => {

  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  console.log("potato", pathSnippets);

  const extraBreadcrumbItems = pathSnippets.map((e, index) => {
      const url = `/${pathSnippets.slice(0, index+1).join('/')}`

      return (
          <Breadcrumb.Item key={e}>
              <Link to={url}>{e === 'admin' ? '': e}</Link>
          </Breadcrumb.Item>
      )
  })


  return (
    <Breadcrumb style={{marginBottom: '4px'}}>{extraBreadcrumbItems}</Breadcrumb>
  )
}

export default CBreadCrumb