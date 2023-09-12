import React, { useEffect } from 'react'
import MenuNav from '../../components/MenuNav'
import Edit from '../../components/Edit'

function EditBoard() {
  // TODO: 비로그인 상태면 메인화면이나 로그인화면으로 redirect 시키는 로직이 필요합니다.
  useEffect(() => {
    // 로그인상태 아니면 redirect
  }, [])
  return (
    <>
      <MenuNav />
      <Edit />
    </>
  )
}

export default EditBoard
