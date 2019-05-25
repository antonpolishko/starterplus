import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button,
  // Card,
  Row,
  Col
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';

// React-image-gallery
import ImageGallery from 'react-image-gallery';

import SiteFooter from './SiteFooter.js';

// import logo from './logo.svg'; //todo replace
import './App-darkly.css';

// Текст вебсайта
const siteLogoText = 'Стартер+';
const siteJumbotronHeader = 'Стартер+';
const siteJumbotronSubHeader =
  'Добро пожаловать в специализированный сервисный центр СТАРТЕР+.';
const siteJumbotronText = 'Мы продлим жизнь вашему автомобилю!';
const siteJumbotronMoreButton = 'Подробнее';
const siteMapIframe =
  '<iframe width="640" height="480" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=202198080654084340327.0004d55a7810c2503279f&amp;ie=UTF8&amp;t=m&amp;ll=51.524686,31.261597&amp;spn=0.012816,0.027466&amp;z=15&amp;output=embed"></iframe>';
// const siteNavbar = {
//   '#': "Главная",
//   'services': "Услуги",
//   'contacts': "Контакты",
//   'map': "Как к нам проехать",
//   'about': "О Нас",
//   };
const heroImages = [
  {
    original: 'pics/1.jpg'
  },
  {
    original: 'pics/2.jpg'
  },
  {
    original: 'pics/3.jpg'
  },
  {
    original: 'pics/4.jpg'
  },
  {
    original: 'pics/5.jpg'
  },
  {
    original: 'pics/6.jpg'
  }
];

const servicesImages = [
  {
    original: 'pics/brake1.jpg'
  },
  {
    original: 'pics/brake2.jpg'
  },
  {
    original: 'pics/brake3.jpg'
  },
  {
    original: 'pics/brake4.jpg'
  },
  {
    original: 'pics/brake5.jpg'
  },
  {
    original: 'pics/brake6.jpg'
  },
  {
    original: 'pics/brake7.jpg'
  },
  {
    original: 'pics/brake8.jpg'
  }
];

const SiteServices = () => {
  return (
    <div>
      <Row>
        <Col md="6" className="d-flex flex-column justify-content-between ">
          <h1>Наши Услуги</h1>
          <ul>
            <h3>Снятие и установка агрегатов</h3>
            <h3>Мы изготавливаем</h3>
            <ul>
              <li>тормозные трубки</li>
            </ul>

            <h3>Мы занимаемся ремонтом</h3>
            <ul>
              <li>стартеров</li>
              <li>генераторов</li>
            </ul>
            <h3>Мы реализуем</h3>
            <ul>
              <li>Стартеры и генераторы </li>
              <li>Автоэлектронику</li>
              <li>Детали тормозных систем</li>
              <li>Запчасти к легковым и коммерческим автомобилям</li>
              <li>Подшипники</li>
              <li>Масла Comma</li>
              <li>Фильтры оптом</li>
              <li>аккумуляторы Bosch,Varta,A-Мega</li>
            </ul>
            <h3>А также</h3>
            <ul>
              <li>Страхование автотранспорта</li>
            </ul>
          </ul>
        </Col>
        <Col md="6" className="d-flex flex-column justify-content-between ">
          <ImageGallery
            items={servicesImages}
            autoPlay
            infinite
            lazyLoad
            showNav
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </Col>
      </Row>
      <br />
      <Row className="d-flex flex-column justify-content-between card">
        <ul>
          <br />
          <h3>ГАРАНТИЯ</h3>
          <p>
            ССЦ Стартер+ сервисно ориентированное предприятие,поэтому все товары
            приобретённые у нас подлежат гарантийному обслуживанию. Сроки
            гарантии составляют от 1 до 6 месяцев.
          </p>
          <p>
            Сроки рассмотрения рекламаций от 3 до 14 дней. Также товар можно
            вернуть на протяжении 14 дней с момента приобретения,при условии,что
            товар не был введён в эксплуатацию и сохранена целостность упаковки.
          </p>

          <h3>За подробностями звоните по телефонам</h3>
          <ul>
            <li>
              <a href="tel:+380958954332">/095/ 895-4332</a>
            </li>
            <li>
              <a href="tel:+380635951913">/063/ 595-1913</a>
            </li>
          </ul>
        </ul>
      </Row>
      <br />
    </div>
  );
};

const SiteAbout = () => {
  return (
    <div>
      <h2>Добро пожаловать в специализированный сервисный центр СТАРТЕР+.</h2>
      <p>
        ССЦ СТАРТЕР+ - это предприятие создано для ремонта и продажи стартеров и
        генераторов, комплектующих к ним, реализации автозапчастей и подшипников
        для легковых и грузовых автомобилей,спецтехники иностранного и
        отечественного производства. ССЦ Стартер+ обладает квалифицированными
        кадрами и всем необходимым технологическим оборудованием для
        качественного выполнения ремонта в сжатые сроки. 90% комплектующих
        находится на собственном складе сервисного центра,что позволяет
        производить ремонт в течении рабочего дня, а в особых случаях в течении
        суток. ССЦ Стартер+ обслуживая автолюбителей, СТО и АТП города и области
        зарекомендовал себя как добросовестный партнер и входит в тройку лучших
        сервисов города Чернигова. ЖЕЛАЕМ СЧАСТЛИВОЙ ДОРОГИ!
      </p>
    </div>
  );
};

class SiteContacts extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <h1>Наши контакты</h1>
        <ul>
          <h3>Звоните по телефонам:</h3>
          <ul>
            <li>/0462/ 605-525 </li>
            <li>/095/ 895-4332 отдел подшипников и автозапчастей</li>
            <li>/063/ 595-1913 отдел стартеров и генераторов</li>
          </ul>
          <h3>Пишите на email:</h3>
          <ul>
            <li>
              <a href="mailto:info@starterplus.net">info@starterplus.net</a>
            </li>
          </ul>
          <h3>Заезжайте по адресу:</h3>
          <ul>
            <li>г.Чернигов, ул. Инструментальная 34</li>
            <Button
              color="primary"
              onClick={() => {
                this.props.handleClick('location');
              }}
            >
              <span className="btn-label">
                <i className="icon-map-marker" /> Найти на карте
              </span>
            </Button>
          </ul>
        </ul>
      </div>
    );
  }
}

const SiteAnniversary = () => {
  return (
    <div>
      <h1>НАМ 10 ЛЕТ!</h1>
      <br />
      <p>
        Уважаемые клиенты, коллеги, друзья! Поздравляем всех нас с юбилеем.
        Огромное спасибо за то, что Вы были с нами на пути становления
        предприятия.
      </p>
      <p>
        Спасибо за терпение и понимание при возникающих рекламационных
        ситуациях, которые неизбежно возникают при ремонте любых технических
        устройств, особенно связанных с электричеством.
      </p>
      <p>
        Мы же будем стремиться к тому, чтобы быть полезными для Вас и ваших
        железных коней. Желаем счастливой дороги и пусть Ваш бизнес будет
        рентабельным. С уважением, команда СТАРТЕР+
      </p>
      <br />
      <Button
        onClick={() => {
          this.props.handleClick('about');
        }}
      >
        Подробнее о нас <i className="icon-info-sign" />
      </Button>
      <Button
        onClick={() => {
          this.props.handleClick('location');
        }}
      >
        Как к нам проехать <i className="icon-road" />{' '}
      </Button>
    </div>
  );
};

class SiteLocation extends Component {
  // constructor(props) {
  //   super(props);
  // }

  iframe = { __html: siteMapIframe };

  render() {
    return (
      <div>
        <h1>Как к нам проехать</h1>
        <br />
        <h2>г.Чернигов, Ул. Инструментальная,34</h2>
        <h2> GPS +51° 31' 27.96", +31° 15' 40.20" </h2>
        <br />

        <div dangerouslySetInnerHTML={this.iframe} />
        <br />
        <small>
          Посмотреть{' '}
          <a href="&quot;https://maps.google.com/maps/ms?msa=0&amp;msid=202198080654084340327.0004d55a7810c2503279f&amp;ie=UTF8&amp;t=m&amp;ll=51.524686,31.261597&amp;spn=0.012816,0.027466&amp;z=15&amp;source=embed&quot; style=&quot;color:#0000FF;text-align:left&quot;">
            Стартер+
          </a>{' '}
          на большой карте
        </small>
        <ul>
          <li>
            С пр.Мира на перекрестке в р-не обл. больницы повернуть на улицу
            Литовскую (бывшая Кирова), проехать 0.8км.
          </li>
          <li>
            С ул. Казацкой (бывшая 50 лет ВЛКСМ) на T-образном перекрестке в
            р-не АИС повернуть на Инструментальную, проехать 1.2км.
          </li>
          <li>
            С ул. Любечской на кольце в р-не мясокомбината перестроиться на ул.
            Казацкую (бывшая 50 лет ВЛКСМ), на T-образном перекрестке в р-не АИС
            повернуть на Инструментальную, проехать 1.2км.
          </li>
        </ul>
      </div>
    );
  }
}

class SiteNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="fixed-top">
          <NavbarBrand href="/">{siteLogoText}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem active={this.props.activePage === '/'}>
                <NavLink
                  onClick={() => {
                    this.props.handleClick('/');
                  }}
                >
                  Главная
                </NavLink>
              </NavItem>
              <NavItem active={this.props.activePage === 'services'}>
                <NavLink
                  onClick={() => {
                    this.props.handleClick('services');
                  }}
                >
                  Услуги
                </NavLink>
              </NavItem>
              <NavItem active={this.props.activePage === 'contacts'}>
                <NavLink
                  onClick={() => {
                    this.props.handleClick('contacts');
                  }}
                >
                  Контакты
                </NavLink>
              </NavItem>
              <NavItem active={this.props.activePage === 'location'}>
                <NavLink
                  onClick={() => {
                    this.props.handleClick('location');
                  }}
                >
                  Как к нам проехать
                </NavLink>
              </NavItem>
              <NavItem active={this.props.activePage === 'about'}>
                <NavLink
                  onClick={() => {
                    this.props.handleClick('about');
                  }}
                >
                  О Нас
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

class SiteHero extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Jumbotron>
        <Row>
          <Col md="7">
            <h1 className="display-3">{siteJumbotronHeader}</h1>
            <p className="lead">{siteJumbotronSubHeader}</p>
            <hr className="my-2" />
            <p>{siteJumbotronText}</p>
          </Col>
          <Col md="5">
            <ImageGallery
              items={heroImages}
              autoPlay
              infinite
              lazyLoad
              showNav
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Col>
        </Row>
        <br />
        <div className="lead text-center">
          <Button
            color="primary"
            onClick={() => {
              this.props.handleClick('about');
            }}
          >
            {siteJumbotronMoreButton}
          </Button>
        </div>
      </Jumbotron>
    );
  }
}

class SiteBody extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <br />
        {this.props.children}
      </div>
    );
  }
}

class SiteCopyright extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <div />;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: '/'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newState) {
    // alert(newState);
    //   alert('click');
    //   this.setState({page:newState});
    this.setState({ page: newState });
    window.scrollTo(0, 0);
  }

  handleBody() {
    const val = this.state.page;
    if (val === '/') return <SiteHero handleClick={this.handleClick} />;
    if (val === 'services')
      return <SiteServices handleClick={this.handleClick} />;
    if (val === 'contacts')
      return <SiteContacts handleClick={this.handleClick} />;
    if (val === 'location')
      return <SiteLocation handleClick={this.handleClick} />;
    if (val === 'about') return <SiteAbout handleClick={this.handleClick} />;
    if (val === 'anniversary')
      return <SiteAnniversary handleClick={this.handleClick} />;
  }

  render() {
    return (
      <Container>
        <SiteNavbar
          handleClick={this.handleClick}
          activePage={this.state.page}
        />
        <br />
        <br />
        <br />
        <SiteBody>{this.handleBody()}</SiteBody>

        <SiteFooter handleClick={this.handleClick} />
        <SiteCopyright />
      </Container>
    );
  }
}

export default App;
