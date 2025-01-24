import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 8,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginEnd: 20,
    paddingHorizontal: 24,
    marginTop: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  link: {
    marginEnd: 20,
    alignSelf: 'flex-end'

  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
  },
  socialButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  socialButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 12
  },
  socialButtonText: {
    fontSize: 16,
  },
  guestButton: {
    borderRadius: 5,
    alignSelf: 'flex-end',
    bottom: 10,
    right: 10,
    position: 'absolute',
  },
  guestButtonText: {
    color: '#828282',
    fontSize: 18,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flex: 1.8,
  },
  icon: {
    width: 56,
    height: 56
  }
})