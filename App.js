import React, { Component } from "react";
import { SideNav, SideNavItem, Button, Icon, Slider, Slide,
Caption, Row, Col, Card, CardTitle, Pagination } from "react-materialize";

class App extends Component {
  render() {
    return (
      <div>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button node="button" style={{padding: "2px 35px"}}><Icon>list</Icon></Button>}
  >
    <SideNavItem
      user={{
        background: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VvdWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        email: 'test@gmail.com',
        image: 'https://i.ibb.co/3WKDrrG/1575012356-293009.jpg',
        name: 'Satria Darmawan'
      }}
      userView
    />
    <SideNavItem
      href="#"
      icon={<Icon>person_outline</Icon>}
    >
      Profil Saya
    </SideNavItem>
    <SideNavItem href="#" icon={<Icon>help</Icon>}>
      Hubungi Kami
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>
      Product
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Kesehatan
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Komputer & Aksesoris
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Gaming
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Kamera
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Olahraga
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Fashion Pria
    </SideNavItem>
    <SideNavItem
      href="#"
      waves
    >
      Fashion Wanita
    </SideNavItem>
  </SideNav> <br/>
  <Slider>
  <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
    <Caption placement="center">
      <h3>
        Pantai
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Menangkan Kesempatan Jalan-Jalan Ke Pantai Dengan Membeli Sebuah Product
      </h5>
    </Caption>
  </Slide>
  <Slide active image={<img alt="" src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg"/>}>
    <Caption placement="left">
      <h3>
        Hongkong
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Menangkan Kesempatan Jalan-Jalan Ke Hongkong Dengan Membeli Sebuah Product
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72"/>}>
    <Caption placement="right">
      <h3>
        Paris
      </h3>
      <h5 className="light grey-text text-lighten-3">
      Menangkan Kesempatan Jalan-Jalan Ke Paris Dengan Membeli Sebuah Product
      </h5>
    </Caption>
  </Slide>
</Slider>
<p>Hot List</p>
<Row>
  <Col
    m={3}
    s={6}
  >
    <Card
      className="small"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <small>Audio Technica - Mulai Dari <a style={{backgroundColor: "red", color:"black"}}> Rp 910 rb</a></small>
    </Card>
  </Col>
  <Col
    m={3}
    s={6}
  >
    <Card
      className="small"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <small>Handphone Samsung - Mulai Dari <a style={{backgroundColor: "red", color:"black"}}> Rp 200 rb</a></small>
    </Card>
  </Col>
  <Col
    m={3}
    s={6}
  >
    <Card
      className="small"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Sequishy</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <small>Sequishy - Mulai Dari <a style={{backgroundColor: "red", color:"black"}}> Rp 5,5 rb</a></small>
    </Card>
  </Col>
  <Col
    m={3}
    s={6}
  >
    <Card
      className="small"
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Koleksi The Avenger</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      <small>Koleksi The Avenger - Mulai Dari <a style={{backgroundColor: "red", color:"black"}}> Rp 10 rb</a></small>
    </Card>
  </Col>
</Row>
<Pagination
  activePage={2}
  items={10}
  leftBtn={<Icon>chevron_left</Icon>}
  maxButtons={8}
  rightBtn={<Icon>chevron_right</Icon>}
/>
</div>
    );
  }
}


export default App;
