const arrayOfJokes =
`My wife and I were happy for 20 years. Then we met.
I drink too much. Last time I gave a urine sample there was an olive in it.
When I was a kid my parents moved a lot, but I always found them.
I looked up my family tree and found out I was the sap.
I looked up my family tree and found three dogs using it.
I come from a stupid family. My father worked in a bank. They caught him stealing pens.
I come from a stupid family. During the civil war my great uncle fought for the west.
When I was born, the doctor said to my father, "I'm sorry, we did everything we could but he still pulled thru".
My mother had morning sickness after I was born.
My mother never breast fed me. She told me she only liked me as a friend!
When I played in the sandbox, the cat kept covering me up.
I could tell my parents hated me. My bath toys were a toaster and a radio.
What a dog I got. We call him Egypt. Because in every room he leaves a pyramid.
What a dog I got, his favorite bone is in my arm.
What a dog I got. Last night he went on the paper 4 times - 3 while I was reading it
What a dog I got. I tried to mate her - she wants 50 biscuits.
Steak and sex, my favorite pair. I get them both very rare.
I worked in a pet store and people would ask how big I would get.
One year they asked me to be poster boy... for birth control.
I remember the time I was kidnapped and they sent back a piece of my finger to my father. He said he wanted more proof.
My uncle's dying wish was to have me sit in his lap. He was in the electric chair!
I went to a freak show and they let me in for nothing.
I stuck my head out the window and got arrested for mooning.
On Halloween, the parents sent their kids out looking like me.
My old man, he carries around the picture of the kid that came with the wallet.
My old man, I told him I'm tired of running around in circles, So he nailed my other foot to the floor.
I had a lot of pimples too. One day I fell asleep in the library. I woke up and a blind man was reading my face.
My wife made me join her bridge club. I jump next Tuesday.
Boy what a hotel that was, why they stole my towel.
It's tough to stay married. My wife kisses the dog on the lips, yet she won't drink from my glass.
Last week my tie caught on fire, some guy tried to put it out with an axe.
For two hours, some guy followed me around with a pooper scooper.
I met the surgeon general - he offered me a cigarette.
This morning when I put on my underwear I could hear the fruit-of-the-loom guys laughing at me.
A travel agent told I could spend 7 nights in Hawaii -- no days, just nights.
I'm a bad lover. I once caught a peeping tom booing me.
My wife only has sex with me for a purpose. Last night it was to time an egg.
I got myself good this morning too. I did my pushups in the nude, I didn't see the mouse trap.
A girl phoned me and said, "Come on over, there's nobody home." I went over; nobody was home!
If it weren't for pick-pockets, I'd have no sex life at all.
I once went out with this wild girl. She made French toast and got her tongue caught in the toaster.
I once went out with this girl, she was no bargain either, she showed up with pigtails under her arms.
My wife's got a face like a saint - a Saint Bernard.
There's only one thing wrong with my wife's face - it shows.
Went to a bar for a few drinks. The bartender asked what I wanted. "Surprise me," I said, so he showed me a naked picture of my wife.
One night I asked a cabbie to take me where the action is, he took me to my house.
My wife wants sex in the back of the car and she wants me to drive.
During sex my wife always wants to talk to me. Just the other night she called me from a hotel.
One day I came home and saw a guy jogging naked, I said "Hey buddy why are you doing that?", he said "cause you came home early!"
I get up and a button falls off, I pick up my briefcase and the handle falls off. I'm afraid to go to the bathroom.
"Doc, every morning I look in the mirror and feel like barfing, what's wrong with me?" He said, "I don't know but your eyesight is perfect!"
I told my dentist my teeth are going yellow. he told me to wear a brown tie.
I told my dentist I want a tooth to match the others. He gave my one with four cavities.
My psychiatrist told me I was crazy. I told him I want a second opinion. He said, "okay you're ugly, too."
I was so ugly my mother used to feed me with a sling shot.
When I was born the doctor slapped my mother.
My wife has to be the worst cook. I don't believe meatloaf should glow in the dark.
My wife has to be the worst cook. In my house, we pray after we eat.
My wife has to be the worst cook. Her specialty is indigestion.
My wife has to be the worst cook. I've got the only dog who begs for alka-seltzer.
One night my wife told me to put out the garbage. I told her, "you cooked it, you take it out!"
For Christmas one year I bought my son a BB gun. He bought me a t-shirt with a bulls eye on the back.
What a kid I got, I told him about the birds and the bees and he told me about the butcher and my wife.
Boy is my wife stupid. It takes her an hour and a half to watch 60 minutes.
I came from a real tough neighborhood. In the local restaurant I sat down and had broken leg of lamb.
I came from a real tough neighborhood. Once a guy pulled a knife on me. I knew he wasn't a professional, the knife had butter on it.
I came from a real tough neighborhood. On my street, the kids take hubcaps - from moving cars.
I once asked a policeman how far it was to the subway. he said, "I don't know, no one has ever made it."
I came from a real tough neighborhood. Why every time I shut the window I hurt somebody's fingers.
I have nothing but troubles with my car. Every Sunday I take my family out for a push.
My wife's not too smart. I told her our kids were spoiled. She said, "all kids smell that way."
Once somebody stole our car. I asked my wife if she saw who it was. She said "no, but I did get the license number."
My wife had her driver's test the other day. She got 8 out of 10. The other 2 guys jumped clear.
My wife's a great driver, she once hit a deer. It was in a zoo.
`.split('\n');

const randomJoke = () => arrayOfJokes[Math.floor(Math.random()*arrayOfJokes.length)];

module.exports = {
  arrayOfJokes,
  randomJoke
}