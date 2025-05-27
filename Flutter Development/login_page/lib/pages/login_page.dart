import 'package:flutter/material.dart';
import 'package:login_page/widgets/rounded_circular_button.dart';
import 'package:login_page/widgets/rounded_text_form_field.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      backgroundColor: Color.fromRGBO(255, 255, 255, 1.0),
    
    body: _buildUI(context),
    );
  }

  Widget _buildUI(BuildContext context) {
    return Column(
      children: [
        _header(context),
        _loginform(context),
      ],
    );
  }

  Widget _header(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height * 0.25,
      color: Color.fromRGBO(230, 253, 253, 1.0),
      padding: EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.10),

      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
        const Padding(
          padding: EdgeInsets.fromLTRB(20, 0, 0, 0),
          child: Text("MizigoApp",
          style: TextStyle(color:  Colors.black, fontWeight: FontWeight.w600, fontSize: 30)),
        ),
        Image.asset("assets/images/images.png",
        width: MediaQuery.of(context).size.width * 0.45,
        fit: BoxFit.fill,)
      ]),
      );
  }

  Widget _loginform(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height * 0.75,
      child: Form(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: 10,
            vertical: 25,
            ),
          child: Column(
            mainAxisSize: MainAxisSize.max,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            _formField(context),
             _bottomButtons(context),
          ],
          ),
        )
        ),
    );
  }

  Widget _formField(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.20,
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          RoundedTextFormField(
            prefixIcon: Icons.email_outlined,
            hintText: "Email Address",
          ),
          RoundedTextFormField(
            prefixIcon: Icons.lock_clock_outlined,
            hintText: "Password",
            obscureText: true,
          ),
          Text("Forgot Password",
          style: TextStyle(
            color: Colors.blue,
            fontSize: 15),
          ),
        ],
      ),
    );
  }

  Widget _bottomButtons(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.max,
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SizedBox(
          width: MediaQuery.of(context).size.width * 0.80,
          height: MediaQuery.of(context).size.height * 0.06,
          child: const RoundedCircularButton(text: "Sign In"),
        ),
        Padding(
          padding: const EdgeInsets.only(
            top: 20,
            bottom: 30,
            ),
          child: Text("I Don't Have an Account",
          style: TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.w600,
            color: Colors.blue),
          ),
        ),
      ],
    );
  }
}