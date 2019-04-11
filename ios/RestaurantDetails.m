#import <Foundation/Foundation.h>
#import "RestaurantDetails.h"
#import "UIImageView+AFNetworking.h"

// import RCTEventDispatcher
#if __has_include(<React/RCTEventDispatcher.h>)
#import <React/RCTEventDispatcher.h>
#elif __has_include(“RCTEventDispatcher.h”)
#import “RCTEventDispatcher.h”
#else
#import “React/RCTEventDispatcher.h” // Required when used as a Pod in a Swift project
#endif


@implementation RestaurantDetails : UIView  {

  RCTEventDispatcher *_eventDispatcher;
  UIView *_mainView;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init])) {
    
    _eventDispatcher = eventDispatcher;
    
    // init main view (full screen)
    _mainView = [[UIView alloc] initWithFrame:CGRectMake(0,0, [[UIScreen mainScreen] applicationFrame].size.width, [[UIScreen mainScreen] applicationFrame].size.height)];
    _mainView.backgroundColor = [UIColor lightGrayColor];
  }
    
  return self;
}

// add the childview to the RestaurantDetails UIView (parent)
- (void)layoutSubviews
{
  [super layoutSubviews];
  _mainView.frame = self.bounds;
  [self addSubview:_mainView];
  [self addButtons];
  [self addHorizontalLine: 340.0];
}

// load url string from props
- (void)setUrl:(NSString *)url
{
  if(![url isEqual:_url]) {
    _url = [url copy];
    [self addImageView: _url];
  }
}

//- (void)addTextView:(NSString *)text
//{
//  UILabel *textLabel = [[UILabel alloc] initWithFrame:CGRectMake(100, 100, 300, 300)];
//  //textLabel.backgroundColor = [UIColor yellowColor];
//  textLabel.text = text;
//  textLabel.textColor = [UIColor whiteColor];
//  [textLabel sizeToFit];
//  [_mainView addSubview:textLabel];
//  [_mainView setNeedsDisplay];
//}

// add image & attach to child view
- (void)addImageView:(NSString *)urlStr
{
  UIImageView *imgview = [[UIImageView alloc]initWithFrame:CGRectMake(0, 0, [[UIScreen mainScreen] bounds].size.width, 280)];
  [imgview setImageWithURL:[NSURL URLWithString:urlStr] placeholderImage:[UIImage imageNamed:@"placeholder"]];
  [imgview setContentMode:UIViewContentModeScaleAspectFit];
  imgview.backgroundColor = [UIColor whiteColor];
  [_mainView addSubview:imgview];
}

// add the buttons
- (void)addButtons
{
  CGFloat buttonWidth = [[UIScreen mainScreen] bounds].size.width / 4.0;
  
  UIImage *menuImg = [UIImage imageNamed:@"menu.png"];
  UIButton *menuButton = [UIButton buttonWithType:UIButtonTypeCustom];
  [menuButton addTarget:self
              action:@selector(buttonPressed:)
    forControlEvents:UIControlEventTouchUpInside];
  [menuButton setTitle:@"Menu" forState:UIControlStateNormal];
  menuButton.titleLabel.font = [UIFont boldSystemFontOfSize:10];
  [menuButton setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
  [menuButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  menuButton.frame = CGRectMake(0.0, 280.0, buttonWidth, 60.0);
  menuButton.backgroundColor = [UIColor whiteColor];
  // attach the button name
  [menuButton.layer setValue:@"menuButton" forKey:@"name"];
  [menuButton setBackgroundImage:menuImg forState:UIControlStateNormal];
  [_mainView addSubview:menuButton];
  
  UIImage *callImg = [UIImage imageNamed:@"call-us.png"];
  UIButton *callButton = [UIButton buttonWithType:UIButtonTypeCustom];
  [callButton addTarget:self
              action:@selector(buttonPressed:)
    forControlEvents:UIControlEventTouchUpInside];
  [callButton setTitle:@"Call Us" forState:UIControlStateNormal];
  callButton.titleLabel.font = [UIFont boldSystemFontOfSize:10];
  [callButton setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
  [callButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  callButton.frame = CGRectMake(buttonWidth, 280.0, buttonWidth, 60.0);
  callButton.backgroundColor = [UIColor whiteColor];
  // attach the button name
  [callButton.layer setValue:@"callButton" forKey:@"name"];
  [callButton setBackgroundImage:callImg forState:UIControlStateNormal];
  [_mainView addSubview:callButton];
  
  UIImage *findImg = [UIImage imageNamed:@"find-us.png"];
  UIButton *findButton = [UIButton buttonWithType:UIButtonTypeCustom];
  [findButton addTarget:self
                 action:@selector(buttonPressed:)
       forControlEvents:UIControlEventTouchUpInside];
  [findButton setTitle:@"Find Us" forState:UIControlStateNormal];
  findButton.titleLabel.font = [UIFont boldSystemFontOfSize:10];
  [findButton setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
  [findButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  findButton.frame = CGRectMake(buttonWidth * 2, 280.0, buttonWidth, 60.0);
  findButton.backgroundColor = [UIColor whiteColor];
  // attach the button name
  [findButton.layer setValue:@"findButton" forKey:@"name"];
  [findButton setBackgroundImage:findImg forState:UIControlStateNormal];
  [_mainView addSubview:findButton];
  
  UIImage *favImg = [UIImage imageNamed:@"favorite.png"];
  UIButton *favButton = [UIButton buttonWithType:UIButtonTypeCustom];
  [favButton addTarget:self
                 action:@selector(buttonPressed:)
       forControlEvents:UIControlEventTouchUpInside];
  [favButton setTitle:@"Favourite" forState:UIControlStateNormal];
  favButton.titleLabel.font = [UIFont boldSystemFontOfSize:10];
  [favButton setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
  [favButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  favButton.frame = CGRectMake(buttonWidth * 3, 280.0, buttonWidth, 60.0);
  
  favButton.backgroundColor = [UIColor whiteColor];
  // attach the button name
  [favButton.layer setValue:@"favButton" forKey:@"name"];
  [favButton setBackgroundImage:favImg forState:UIControlStateNormal];
  [_mainView addSubview:favButton];
}

// pass the event back to RN with the buttonName
- (void)buttonPressed:(UIButton *)sender
{
  // extract the button name
  NSString *buttonName = (NSString *)[sender.layer valueForKey:@"name"];
  // pass button name to event onButtonPressed
  self.onButtonPressed(@{@"buttonName":buttonName});
}

// add the buttons
- (void)addHorizontalLine:(CGFloat)posX
{
  CGFloat screenWidth = [[UIScreen mainScreen] bounds].size.width;
  UIView *horizontalLine = [[UIView alloc] initWithFrame:CGRectMake(0, posX, screenWidth, 0.5)];
  horizontalLine.backgroundColor = [UIColor blackColor];
  [_mainView addSubview:horizontalLine];
}

@end
