import React from 'react';
import './App.css';
import {Row, Col, Table, Tag} from 'antd';

function App() {
    const columns = [
        {
            title: '片名',
            dataIndex: 'name',
        },
        {
            title: '所属年代',
            dataIndex: 'ucDate',
            sorter: (a, b) => a.ucDate - b.ucDate,
        },
        {
            title: '播出年代',
            dataIndex: 'boardDate',
            sorter: (a, b) => a.boardDate - b.boardDate,
        },
        {
            title: '类型',
            dataIndex: 'type',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color;
                        if(tag === 'tv') {
                            color = 'geekblue';
                        } else if(tag === 'ova') {
                            color = 'volcano'
                        } else if(tag === '剧场版') {
                            color = 'green'
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
    ];

    const data = [
        {
            name: '机动战士高达',
            ucDate: 79,
            boardDate: 1979,
            type: ['tv']
        },
        {
            name: '机动战士高达Z',
            ucDate: 87,
            boardDate: 1985,
            type: ['tv']
        },
        {
            name: '机动战士高达ZZ',
            ucDate: 88,
            boardDate: 1986,
            type: ['tv']
        },
        {
            name: '机动战士高达V',
            ucDate: 153,
            boardDate: 1993,
            type: ['tv']
        },
        {
            name: '机动战士高达UC RE:0096',
            ucDate: 96,
            boardDate: 2016,
            type: ['tv']
        },
        {
            name: '机动战士高达 the origin 前夜 红色彗星',
            ucDate: 68,
            boardDate: 2019,
            type: ['tv']
        },
        {
            name: '机动战士高达0080:口袋里的战争',
            ucDate: 79,
            boardDate: 1989,
            type: ['ova']
        },
        {
            name: '机动战士高达0083:星尘的回忆',
            ucDate: 83,
            boardDate: 1991,
            type: ['ova']
        },
        {
            name: '机动战士高达MS08小队',
            ucDate: 79,
            boardDate: 1996,
            type: ['ova']
        },
        {
            name: '机动战士高达MS08小队:最后的乐园',
            ucDate: 79,
            boardDate: 1999,
            type: ['ova']
        },
        {
            name: '机动战士高达 MS IGLOO 默示录0079',
            ucDate: 79,
            boardDate: 2006,
            type: ['ova']
        },
        {
            name: '机动战士高达 MS IGLOO2 重力战线',
            ucDate: 79,
            boardDate: 2008,
            type: ['ova']
        },
        {
            name: '机动战士高达战记',
            ucDate: 79,
            boardDate: 2009,
            type: ['ova']
        },
        {
            name: '机动战士高达UC',
            ucDate: 96,
            boardDate: 2010,
            type: ['ova']
        },
        {
            name: '机动战士高达MS08小队:三次元的战斗',
            ucDate: 79,
            boardDate: 2013,
            type: ['ova']
        },
        {
            name: '机动战士高达 the origin',
            ucDate: 68,
            boardDate: 2015,
            type: ['ova']
        },
        {
            name: '机动战士高达雷霆宇域战线',
            ucDate: 79,
            boardDate: 2015,
            type: ['ova']
        },
        {
            name: '机动战士高达 twilight axis',
            ucDate: 96,
            boardDate: 2017,
            type: ['ova']
        },
        {
            name: '机动战士高达',
            ucDate: 79,
            boardDate: 1981,
            type: ['剧场版']
        },
        {
            name: '机动战士高达2 哀·战士篇',
            ucDate: 79,
            boardDate: 1981,
            type: ['剧场版']
        },
        {
            name: '机动战士高达3 相逢在宇宙篇',
            ucDate: 79,
            boardDate: 1982,
            type: ['剧场版']
        },
        {
            name: '机动战士高达:逆袭的夏亚',
            ucDate: 93,
            boardDate: 1988,
            type: ['剧场版']
        },
        {
            name: '机动战士高达F91',
            ucDate: 123,
            boardDate: 1991,
            type: ['剧场版']
        },
        {
            name: '机动战士高达0083:吉翁的残光',
            ucDate: 83,
            boardDate: 1992,
            type: ['剧场版']
        },
        {
            name: '机动战士高达MS08小队:米拉的报告',
            ucDate: 79,
            boardDate: 1998,
            type: ['剧场版']
        },
        {
            name: 'G-SAVIOUR',
            ucDate: 223,
            boardDate: 2000,
            type: ['剧场版']
        },
        {
            name: '高达新体验0087 green divers',
            ucDate: 87,
            boardDate: 2001,
            type: ['剧场版']
        },
        {
            name: '机动战士高达 MS IGLOO 一年战争秘录',
            ucDate: 79,
            boardDate: 2004,
            type: ['剧场版']
        },
        {
            name: '机动战士高达Z:星之继承者',
            ucDate: 87,
            boardDate: 2005,
            type: ['剧场版']
        },
        {
            name: '机动战士高达Z2:恋人们',
            ucDate: 87,
            boardDate: 2005,
            type: ['剧场版']
        },
        {
            name: '机动战士高达Z3:星之鼓动的爱',
            ucDate: 87,
            boardDate: 2006,
            type: ['剧场版']
        },
        {
            name: '机动战士高达 雷霆宇域 december sky',
            ucDate: 79,
            boardDate: 2016,
            type: ['剧场版']
        },
        {
            name: '机动战士高达 雷霆宇域 bandit flower',
            ucDate: 79,
            boardDate: 2017,
            type: ['剧场版']
        },
        {
            name: '机动战士高达NT',
            ucDate: 97,
            boardDate: 2018,
            type: ['剧场版']
        },
    ];



    return (
        <div>
            <Row style={{marginTop: '5vh'}}>
                <Col span={22} offset={1}>
                    <Table columns={columns} dataSource={data} rowKey={'name'} pagination={{pageSize: 50}} />
                </Col>
            </Row>
        </div>
    );
}

export default App;
