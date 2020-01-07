import React, {Component,Fragment} from 'react';
import {Button,Input, List} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.addItem = this.addItem.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem() {
    if (this.state.inputValue !== '') {
      this.setState({
        list: [...this.state.list, {name: this.state.inputValue}],
        inputValue: ''
      })
    }
  }

  changeInput(e) {
    this.setState({
      inputValue: (e.target.value).trim()
    })
  }

  deleteItem(index){
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
        list
    });
  }

  componentDidMount(){
    Axios.post('https://www.fastmock.site/mock/ff78a80df810a6448e6ebde5dd8b97eb/react/react/initData').then((res) => {
      const data = res.data || {};
      this.setState(data);
    }).catch((err) => {
      console.log('获取接口数据异常！')
    })
  }

  render() {
    return (
      <Fragment>
        <div className = "myDiv">
          <div>
            <Input 
              value = {this.state.inputValue}
              className = "input"
              placeholder="请输入内容"
              onChange = {this.changeInput}
            />
            <Button 
              className = "addButton"
              type = "primary"
              onClick = {this.addItem}>
            添加</Button>
          </div>
          <div className = "list">
            <List
              bordered
              dataSource={this.state.list}
              renderItem={(item, index) => (<List.Item onClick={() => this.deleteItem(index)}>{item.name}</List.Item>)}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;