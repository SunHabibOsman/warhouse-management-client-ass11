import React, { useEffect, useState } from 'react';

const UseIdService = (id) => {
  const [update, setUpdate] = useState([])

  useEffect(() => {
    const url = `https://mighty-brushlands-00325.herokuapp.com/computer/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => setUpdate(data))


  }, [id])
  return [update, setUpdate]

};

export default UseIdService;