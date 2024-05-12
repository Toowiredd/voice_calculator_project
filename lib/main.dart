import 'package:flutter/material.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;
import 'package:flutter_tts/flutter_tts.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

void main() {
  runApp(VoiceCalculatorApp());
}

class VoiceCalculatorApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Voice Calculator',
      theme: ThemeData(
        primarySwatch: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        fontFamily: 'Roboto',
      ),
      darkTheme: ThemeData.dark().copyWith(
        primaryColor: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity,
        fontFamily: 'Roboto',
      ),
      localizationsDelegates: [
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: [
        const Locale('en', ''),
        const Locale('es', ''),
        const Locale('fr', ''),
      ],
      home: CalculatorHome(),
    );
  }
}

class CalculatorHome extends StatefulWidget {
  @override
  _CalculatorHomeState createState() => _CalculatorHomeState();
}

class _CalculatorHomeState extends State<CalculatorHome> {
  late stt.SpeechToText _speech;
  bool _isListening = false;
  String _text = '';
  final FlutterTts _flutterTts = FlutterTts();
  List<String> _history = [];
  bool _isDarkMode = false;

  @override
  void initState() {
    super.initState();
    _speech = stt.SpeechToText();
    _loadHistory();
    _loadSettings();
  }

  void _loadHistory() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _history = prefs.getStringList('history') ?? [];
    });
  }

  void _saveHistory() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setStringList('history', _history);
  }

  void _loadSettings() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      _isDarkMode = prefs.getBool('isDarkMode') ?? false;
    });
  }

  void _saveSettings() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setBool('isDarkMode', _isDarkMode);
  }

  void _calculateAndSpeak(String text) {
    final numbers = RegExp(r'\d+').allMatches(text).map((m) => int.parse(m.group(0))).toList();
    final operators = RegExp(r'plus|minus|multiplied by|divided by').allMatches(text).map((m) => m.group(0)).toList();

    if (numbers.isEmpty) {
      _speak('No numbers detected. Please try again.');
      return;
    }

    if (operators.length != numbers.length - 1) {
      _speak('Invalid expression. Please try again.');
      return;
    }

    num result = numbers[0];
    String calculation = '${numbers[0]}';

    for (int i = 0; i < operators.length; i++) {
      final operator = operators[i];
      final number = numbers[i + 1];

      if (operator == 'plus') {
        result += number;
        calculation += ' + $number';
      } else if (operator == 'minus') {
        result -= number;
        calculation += ' - $number';
      } else if (operator == 'multiplied by') {
        result *= number;
        calculation += ' * $number';
      } else if (operator == 'divided by') {
        if (number == 0) {
          _speak('Cannot divide by zero. Please try again.');
          return;
        }
        result /= number;
        calculation += ' / $number';
      }
    }

    final formattedResult = result.toStringAsFixed(2);
    final expression = '$calculation = $formattedResult';

    setState(() {
      _text = expression;
      _history.add(expression);
    });

    _saveHistory();
    _speak(formattedResult);
  }

  void _speak(String text) async {
    await _flutterTts.speak(text);
  }

  void _startListening() async {
    if (!_isListening) {
      bool available = await _speech.initialize();
      if (available) {
        setState(() => _isListening = true);
        _speech.listen(
          onResult: (val) => setState(() {
            _calculateAndSpeak(val.recognizedWords);
          }),
        );
      }
    } else {
      setState(() => _isListening = false);
      _speech.stop();
    }
  }

  void _clearHistory() {
    setState(() {
      _history.clear();
      _text = '';
    });
    _saveHistory();
  }

  void _toggleTheme() {
    setState(() {
      _isDarkMode = !_isDarkMode;
    });
    _saveSettings();
  }

  @override
  void dispose() {
    _flutterTts.stop();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: _isDarkMode ? ThemeData.dark() : ThemeData.light(),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Voice Calculator'),
          centerTitle: true,
          actions: [
            IconButton(
              icon: Icon(_isDarkMode ? Icons.wb_sunny : Icons.nightlight_round),
              onPressed: _toggleTheme,
            ),
            IconButton(
              icon: Icon(Icons.help),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => HelpScreen()),
                );
              },
            ),
            IconButton(
              icon: Icon(Icons.settings),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SettingsScreen()),
                );
              },
            ),
          ],
        ),
        floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
        floatingActionButton: 
		AvatarGlow(
          animate: _isListening,
          glowColor: Theme.of(context).primaryColor,
          endRadius: 80.0,
          duration: const Duration(milliseconds: 2000),
          repeatPauseDuration: const Duration(milliseconds: 100),
          repeat: true,
          child: FloatingActionButton(
            onPressed: _startListening,
            child: Icon(_isListening ? Icons.mic : Icons.mic_none),
          ),
        ),
        body: Column(
          children: [
            Expanded(
              child: Container(
                padding: const EdgeInsets.all(16.0),
                alignment: Alignment.bottomLeft,
                child: Text(
                  _text,
                  style: TextStyle(
                    fontSize: 32.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
            Expanded(
              child: ListView.builder(
                reverse: true,
                itemCount: _history.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(_history[index]),
                  );
                },
              ),
            ),
          ],
        ),
        bottomNavigationBar: BottomAppBar(
          child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.clear_all),
onPressed: _clearHistory,
),
Text('Voice Calculator'),
SizedBox(width: 48.0),
],
),
),
),
);
}
}

class HelpScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Help'),
),
body: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'How to use Voice Calculator:',
style: TextStyle(
fontSize: 24.0,
fontWeight: FontWeight.bold,
),
),
SizedBox(height: 16.0),
Text(
'1. Tap the microphone button to start listening.',
style: TextStyle(fontSize: 18.0),
),
Text(
'2. Speak your calculation using numbers and operators (plus, minus, multiplied by, divided by).',
style: TextStyle(fontSize: 18.0),
),
Text(
'3. The app will perform the calculation and speak the result.',
style: TextStyle(fontSize: 18.0),
),
Text(
'4. The calculation history is displayed below.',
style: TextStyle(fontSize: 18.0),
),
Text(
'5. Tap the "Clear History" button to clear the calculation history.',
style: TextStyle(fontSize: 18.0),
),
],
),
),
);
}
}

class SettingsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Settings'),
),
body: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Customize Voice Calculator:',
style: TextStyle(
fontSize: 24.0,
fontWeight: FontWeight.bold,
),
),
SizedBox(height: 16.0),
SwitchListTile(
title: Text('Dark Mode'),
value: _CalculatorHomeState()._isDarkMode,
onChanged: (value) {
_CalculatorHomeState()._toggleTheme();
},
),
],
),
),
);
}
}