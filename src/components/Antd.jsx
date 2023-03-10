import React, {useState} from 'react'
import {Button, Input, Select, Form, Table, message, Alert, DatePicker, TimePicker, Spin, Progress} from 'antd'
import {PoweroffOutlined} from '@ant-design/icons'
import { useEffect } from 'react'

function Antd() {
    const [loading, setLoading] = useState(false)
    const onButtonClick = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000);
    }
    const fruits = ['Banana', 'Mango', 'Oranges', 'Cherry']

    const [showAlert, setShowAlert] = useState(false)
    const onFinished = (e) => {
        console.log(e)
        setTimeout(() => {
            setShowAlert(true)
            message.success('Login successful')
        }, 2000);
    }
    const data = [
        {
            name: 'Josh',
            age: 43,
            address: 'Address 1',
            key: '1'
        },
        {
            name: 'James',
            age: 12,
            address: 'Address 2',
            key: '2'
        },
        {
            name: 'John',
            age: 34,
            address: 'Address 3',
            key: '3'
        },
    ]
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'key',
            render: name=>{
                return <a onClick={()=>alert(name)}>{name}</a>
            }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'key',
            sorter: (a, b) => a.age - b.age
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'key'
        },
        {
            title: 'Graduated',
            // dataIndex: 'address',
            key: 'key',
            render: payload=>{
                return <small>{payload.age>20?'True': 'False'}</small>
            }
        },
    ]

    const [spinning, setSpinning] = useState(false)

    const f_columns = [
        {
            key: '1',
            title: 'Title',
            dataIndex: 'title',
            render: (title)=>{
                return <small className='shadow'>{title}</small>
            }
        },
        {
            key: '2',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '3',
            title: 'User ID',
            dataIndex: 'userId',
            sorter:(record1, record2)=>{
                return record1.userId > record2.userId
            }
        },
        {
            key: '4',
            title: 'Status',
            dataIndex: 'completed',
            render: (completed)=>{
                return <p>{completed ? 'Complete' : 'In Progress'}</p>
            },
            filters: [
                {text: 'Complete', value: true},
                {text: 'In Progress', value: false}
            ],
            onFilter: (value, record)=>{
                return record.completed === value
            }
        },
    ]
    const [datasource, setDatasource] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
            setDatasource(data)
            console.log(data)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(13)
  return (
    <div>
        
        <div className="flex p-5">
            <Table
                columns={f_columns}
                dataSource={datasource}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    onChange:(page, pageSize)=>{
                        setPage(page)
                        setPageSize(pageSize)
                    }
                }}
            >

            </Table>
        </div>
        <div className="flex p-3" style={{width: '70%'}}>
            <Progress percent={33} type='dashboard' strokeColor={'red'} status='active'/>
            <Progress percent={33} type='line' strokeWidth={20}/>
            <Progress percent={33} type='dashboard' strokeColor={'red'} status='active'/>
            <Progress percent={33} type='line' status='active' steps={5}/>
        </div>
        <div className="flex v-flex p-3">
            <Spin spinning={spinning}/>
            <Button onClick={()=>setSpinning(prev=>!prev)}>Toggle Spinning</Button>
        </div>
        <div className="flex p-3">
            <DatePicker />
            <DatePicker.RangePicker />
            <TimePicker />
        </div>
        <div className="flex p-3">
        <Table
            dataSource={data}
            columns={columns}
        ></Table>
        </div>
        {
            showAlert&& <Alert type='success' message='Error' closable description='There was an error while trying to make the request'/>
        }
        <Form onFinish={onFinished}>
            <Form.Item label='User name' colon={false}  name={'username'}>
                <Input placeholder='Enter username' required></Input>
            </Form.Item>
            <Form.Item label='Password' name={'password'}>
                <Input.Password placeholder='Enter password' required></Input.Password>
            </Form.Item>    
            <Form.Item>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>    
        </Form>
        <p>Which are your favourite fruits</p>
        <Select mode='multiple' maxTagCount={2} style={{width: '50%'}} allowClear placeholder="Select Fruit">
            {fruits.map((fruit, idx)=>{
                return <Select.Option key={idx} value={fruit}></Select.Option>
            })}
        </Select>
        <Input placeholder='name' maxLength={10} prefix={<PoweroffOutlined/>} allowClear></Input>
        <Button 
            type='primary' 
            onClick={onButtonClick} 
            icon={<PoweroffOutlined/>}  
            loading={loading} 
            block
            >what is good</Button>
    </div>
  )
}

export default Antd