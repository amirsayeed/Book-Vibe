import React from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getWishListItem } from '../../Utility/addToStoredb';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PagesDashboard = () => {
    const data = useLoaderData()
    // console.log(data);
    const storedWishList = getWishListItem();
    const storedWishListInt = storedWishList.map(id=>parseInt(id));
    const wishBookList = data.filter(book=> storedWishListInt.includes(book.bookId));
    
    return (
        <div className='flex justify-center my-10'>
                <BarChart
                width={2000}
                height={400}
                data={wishBookList}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                </BarChart>
        </div>
    );
};

export default PagesDashboard;