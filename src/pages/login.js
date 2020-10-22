import React,{Component} from "react";
HTTPSERVICE = require("../service/httpService");
GLOBAL = require("../pages/global");
//GENERALHELPER = require('../service/generalHelper');
import {
	Text,
	Button,
	ActivityIndicator,
	View,
	Alert,
	Switch,
	BackHandler,
	StyleSheet,
	TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationActions } from 'react-navigation';
import LocalizedStrings from 'react-native-localization';
import Dialog from "react-native-dialog";
//import RNUxcam from 'react-native-ux-cam';

//import styles from '../styles/style';
//import customizedColor from '../styles/customizedColor';
//import PasswordChange from '../components/passwordChange';
