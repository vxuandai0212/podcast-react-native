import React from 'react';
import { 
  Container, 
  Header, 
  Content, 
  List, 
  ListItem, 
  Thumbnail, 
  Text, 
  Left, 
  Body, 
  Right, 
  Button,
  Icon, 
  Picker, 
  Form,
  Root,
  DatePicker 
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Font, AppLoading } from "expo";
import podcasts from './data.json'

class ListenScreen extends React.Component {
  static navigationOptions = {
    title: 'Listening to Podcasts',
  };

  constructor(props) {
    super(props);
    this.state = {
      channel: undefined,
      level: undefined,
      day: new Date(),
      topic: undefined,
      loading: true,
      podcasts: []
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({
      loading: false,
    })
  }

  componentDidMount = () => {
    this.setState({
      podcasts: podcasts,
    })
  }

  onChannelChange(value) {
    this.setState({
      channel: value
    });
  }

  onLevelChange(value) {
    this.setState({
      level: value
    });
  }

  onDayChange(value) {
    this.setState({
      day: value
    });
  }

  onTopicChange(value) {
    this.setState({
      topic: value
    });
  }

  render() {
    if (this.state.loading) {
      return ( 
        <Root>
          <AppLoading />
        </Root>
      )
    }
    return (
      <Container>
        <Grid>
          <Row size={20}>
            <Content>
              <Form>
                <Row>
                  <Col>
                    <Picker
                      note
                      mode="dropdown"
                      selectedValue={this.state.channel}
                      onValueChange={this.onChannelChange.bind(this)}
                    >
                      <Picker.Item label="Channel" value="default" />
                      <Picker.Item label="VOA" value="0" />
                    </Picker>
                  </Col>
                  <Col>
                    <Picker
                      note
                      mode="dropdown"
                      selectedValue={this.state.level}
                      onValueChange={this.onLevelChange.bind(this)}
                    >
                      <Picker.Item label="Level" value="default" />
                      <Picker.Item label="Begin" value="0" />
                      <Picker.Item label="Intermediate" value="1" />
                      <Picker.Item label="Advance" value="2" />
                    </Picker>
                  </Col>
                </Row>
                <Row>
                  <Col size={60}>
                    <Picker
                      note
                      mode="dropdown"
                      selectedValue={this.state.topic}
                      onValueChange={this.onTopicChange.bind(this)}
                    >
                      <Picker.Item label="Topic" value="default" />
                      <Picker.Item label="Health & Lifestyle" value="0" />
                      <Picker.Item label="What Is Trending Today" value="1" />
                      <Picker.Item label="Science & Technology" value="2" />
                    </Picker>
                  </Col>
                  <Col size={40}>
                    <DatePicker
                      defaultDate={new Date(2018, 4, 4)}
                      minimumDate={new Date(2018, 1, 1)}
                      maximumDate={new Date(2018, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Select date"
                      textStyle={{ color: "green" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                      onDateChange={this.onDayChange.bind(this)}
                      disabled={false}
                    />
                  </Col>
                </Row>
              </Form>
            </Content>
          </Row>
          <Row size={80}>
            <Content>
              <List>
                {this.state.podcasts.length != 0 && this.state.podcasts.map(podcast => 
                  <ListItem key={podcast.id} thumbnail>
                    <Left>
                      <Thumbnail square source={{ uri: 'https://i.pinimg.com/236x/13/62/93/136293ba81c9e4a701cd273a30a35109--artificial-flower-arrangements-artificial-flowers.jpg' }} />
                    </Left>
                    <Body>
                      <Text>{podcast.id}</Text>
                    </Body>
                    <Right>
                      <Button 
                        transparent
                        onPress={() => this.props.navigation.navigate('ListenArticle', podcast)}
                        >
                        <Text>View</Text>
                      </Button>
                    </Right>
                  </ListItem>
                )}
              </List>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}
class ListenArticleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('id', 'Article name'),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    const { navigation } = this.props;
    const content = navigation.getParam('content', 'This is body');

    if (this.state.loading) {
      return ( 
        <Root>
          <AppLoading />
        </Root>
      )
    }

    return (
      <Container>
        <Grid>
          <Row size={30}>
            <Content></Content>
          </Row>
          <Row size={70}>
            <Content>
              <Text>{content.script.join(' ')}</Text>
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export {
  ListenScreen,
  ListenArticleScreen
}