from flask import Flask, send_file, jsonify

app = Flask(__name__)

@app.route('/images/product/<filename>')
def get_product_image(filename):
    return send_file(f'images/product/{filename}', mimetype='image/png')

@app.route('/images/icon/<filename>')
def get_icon_image(filename):
    return send_file(f'images/icon/{filename}', mimetype='image/png')

@app.route('/images/bk/<filename>')
def get_bk_image(filename):
    return send_file(f'images/bk/{filename}', mimetype='image/png')

@app.route('/images/product_list')
def get_image_list():
    # 假设图片URL存储在数据库中
    image_urls = [
        'http://127.0.0.1:5000/images/product/',
        'https://mybackend.com/images/pic2.png',
        'https://mybackend.com/images/pic3.png'
    ]
    return jsonify(image_urls)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
