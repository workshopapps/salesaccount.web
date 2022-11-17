import React from 'react'
import { Link } from "react-router-dom";

const index = ({title, path, primary}) => {
  return <Link to={path}>{title}</Link>;
}

export default index