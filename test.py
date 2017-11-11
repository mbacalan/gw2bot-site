import unittest

from gw2botsite import app


class FlaskTestCase(unittest.TestCase):
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_commands(self):
        tester = app.test_client(self)
        response = tester.get('/commands', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_faq(self):
        tester = app.test_client(self)
        response = tester.get('/faq', content_type='html/text')
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()
