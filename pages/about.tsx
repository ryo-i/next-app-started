import React  from 'react';

// Component
function About() {
    return (
        <div className="inner">
            <section>
                <h2>タイトル</h2>
                <p>説明説明説明説明説明説明説明説明</p>
            </section>
            <section>
                <h2>イイダリョウ</h2>
                <p>フロントエンドエンジニア。神奈川に住まう四十路のオジキ。 DTP→Webデザイナーから転向し今に至る。引き続きコツコツの日々。ブログも書いてます。 Webづくり やりたい時が 始め時！</p>
                <ul>
                    <li><a href="https://www.i-ryo.com">ブログ</a></li>
                    <li><a href="https://twitter.com/idr_zz">Twitter</a></li>
                    <li><a href="https://qiita.com/i-ryo">Qiita</a></li>
                    <li><a href="https://github.com/ryo-i">GitHub</a></li>
                </ul>
            </section>
        </div>
    );
}

export default About;