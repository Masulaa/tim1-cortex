import { Avatar, List, Divider, Button } from 'antd';
import "./HistoryOfMeals.css"


const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const HistoryOfMeals = () => {


  return (
    <>
    <div>
      <h1 style={{color: "#1677FF"}} className='title'>
        Istorija obroka
      </h1>
    </div>
    <Divider />
    <List
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Šta spada u taj obrok..."
          />
          <Button type='primary'>Pogledaj detaljnije</Button>
        </List.Item>
      )}
    />
  </>
  );
};

export default HistoryOfMeals;
