// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Hi~ What date is it today?",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "It's your special dayyy!!!🎉",  // 同上...
        "Happy Birthday to you!!! Happy Birthday to youuuu~🎵",
        "To the sweetest",
        "funniest",
        "amazing guy I met🥳",
        "See, time flies omg",
        "You are already 21 now😏!",
        "hey, just 1 year younger than me rn XD",
        "I'm glad and proud of youuuuu😌!",
        "So happy our paths crossed and that",
        "we get to share a part of our lives TOGETHER :D",
        "You deserve all the happiness😊",
        "I hope this year, not enough XD, in your life",
        "with more smiles, more laughter, and way more good vibes than before",
        "hahah you know what",
        "I was actually going to pull a little prank at first",
        "ummm XD haha well, I changed my mind",
        "but at least looks not that bad right now ",
        "btw this website is yours now, no one will know it XD",
        "oops except me hahaha",
        "Happy birthday again!!!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "To the sweetest": "./imgs/sweet.jpg",
        "funniest": "./imgs/funny.jpg",
        "amazing guy I met🥳": "./imgs/xiaokeai.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Start",
        play: "Music",
        bannar_coming: "Banner",
        balloons_flying: "umm missing something?",
        cake_fadein: "Cake?",
        light_candle: "Light Candle?",
        wish_message: "Happy Birthday!",
        story: "A MESSAGE FOR YOU",
    }
};
