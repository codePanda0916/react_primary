import React, { Fragment } from 'react';
import { Table, Popconfirm, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Axios from 'axios';

class TodoTable extends React.Component{
  constructor(props){
    super(props);
    this.state={
      columns: [
        // eslint-disable-next-line
        {title: '姓名', dataIndex: 'name', key: 'name', render: text => <a href="#">{text}</a>},
        {title: '年龄', dataIndex: 'age', key:'age'},
        {title: '日期', dataIndex: 'date', key: 'date'},
        {title: '地址', dataIndex: 'address', key: 'address'},
        {title: '备注', dataIndex: 'action', key: 'action', render: (text, record, index) => (<Popconfirm 
          title="确定要删除吗？"
          onConfirm={() => this.deleteTableItem(index)}
          onCancel={() => {}}
          okText="确定"
          cancelText="取消"
          // eslint-disable-next-line
          ><a href='#'>删除</a>
        </Popconfirm>)}
      ],
      data: []
    };
  }

  deleteTableItem = (index) => {
    let data = this.state.data;
    data.splice(index, 1);
    this.setState(data);
    message.success('删除成功！');
  }

  componentDidMount(){
    Axios.get('https://www.fastmock.site/mock/ff78a80df810a6448e6ebde5dd8b97eb/react/tableList').then(res => {
    let data = res.data;  
    this.setState({
        data
      });
    }).catch(err => {
      console.log(err);
    })
  }

  render(){
    const { columns, data } = this.state;
    return(
      <Fragment>
        <div className="component_table">
          <span className="table_tags">操作历史记录</span>
          <Table bordered className="table_content" columns={columns} dataSource={data}/>
        </div>
      </Fragment>
    )
  }
}

export default TodoTable;