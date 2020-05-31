// #1
const myVideoClip = new VideoClip("https://adultswim-vodlive.cdn.turner.com/live/robot-chicken/stream_6.m3u8")

// #2
const myVideoTexture = new VideoTexture(myVideoClip)

// #3
const myMaterial = new BasicMaterial()
myMaterial.texture = myVideoTexture

// #4
const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(8, 2, 8),
    rotation: Quaternion.Euler(0,0,0),
    scale: new Vector3(2,1,2)
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen) 
