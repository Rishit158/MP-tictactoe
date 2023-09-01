// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';

class CustomText extends StatelessWidget {
  final List<Shadow> shawdows;
  final String text;
  final double fontSize;

  const CustomText({
    Key? key,
    required this.shawdows,
    required this.text,
    required this.fontSize,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: TextStyle(
        color: Colors.white,
        fontWeight: FontWeight.bold,
        shadows: shawdows,
        fontSize: fontSize,
      ),
    );
  }
}
