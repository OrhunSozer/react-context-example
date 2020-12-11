import './App.css';
import 'antd/dist/antd.css'; 

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  Home  from "./pages/Home";
import  Users from "./pages/Users";
import  Error404 from "./pages/Error404";

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
    
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/users">Users</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '30px 0' }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
            <div className="site-layout-content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/users" exact component={Users} />
                <Route path="*" component={Error404} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Context API Tutorial</Footer>
        </Layout>
      </Router> 
    </>
  );
}

export default App;

