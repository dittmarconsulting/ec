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
    _mainView.backgroundColor = [UIColor whiteColor];
  }
  return self;
}

// add the childview to the RestaurantDetails UIView (parent)
- (void)layoutSubviews
{
  [super layoutSubviews];
  _mainView.frame = self.bounds;
  [self addSubview:_mainView];
  
  // create buttons
  [self addButtons];
}

- (void)setRestaurantObj:(NSDictionary *)restaurantObj
{
  CGFloat _mainViewWidth = [[UIScreen mainScreen] bounds].size.width;

  if(![restaurantObj isEqual:_restaurantObj]) {
    restaurantObj = [restaurantObj copy];
    // create image
    [self addImageView: restaurantObj[@"imgUrl"]];
    // create buttons
    [self addButtons];
    // horizontal line
    [self addHorizontalLine: 390];
    // create the restaurant name label
    [self addLabelWithFrame: CGRectMake(0, 391, _mainViewWidth, 70) labelText: restaurantObj[@"name"] labelSize: 30 isbold: 1];
    // create the restaurant type label
    [self addLabelWithFrame: CGRectMake(0, 450, _mainViewWidth, 80) labelText: restaurantObj[@"type"] labelSize: 26 isbold:0];
    // horizontal line
    [self addHorizontalLine: 540];
    // create the icon/lable for the opening hours
    [self addImagewithLabel: CGRectMake(0, 550, _mainViewWidth, 60) labelText: restaurantObj[@"open"] labelSize: 20 iconName:@"clock.png"];
    // create the icon/lable for the address
    [self addImagewithLabel: CGRectMake(0, 600, _mainViewWidth, 60) labelText: restaurantObj[@"address"] labelSize: 20 iconName:@"location.png"];
    // horizontal line
    [self addHorizontalLine: 670];
  }
}

// create image & attach to child view
- (void)addImageView:(NSString *)urlStr
{
  UIImageView *imgview = [[UIImageView alloc]initWithFrame:CGRectMake(0, 0, [[UIScreen mainScreen] bounds].size.width, 320)];
  [imgview setImageWithURL:[NSURL URLWithString:urlStr] placeholderImage:[UIImage imageNamed:@"placeholder"]];
  [imgview setContentMode:UIViewContentModeScaleAspectFit];
  imgview.backgroundColor = [UIColor whiteColor];
  [_mainView addSubview:imgview];
}

// create the buttons & attach to child view
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
  [menuButton setTitleColor:[UIColor colorWithRed:(92/255.0) green:(97/255.0) blue:(100/255.0) alpha:1] forState:UIControlStateNormal];
  [menuButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  menuButton.frame = CGRectMake(0.0, 320.0, buttonWidth, 60.0);
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
  [callButton setTitleColor:[UIColor colorWithRed:(92/255.0) green:(97/255.0) blue:(100/255.0) alpha:1] forState:UIControlStateNormal];
  [callButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  callButton.frame = CGRectMake(buttonWidth, 320.0, buttonWidth, 60.0);
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
  [findButton setTitleColor:[UIColor colorWithRed:(92/255.0) green:(97/255.0) blue:(100/255.0) alpha:1] forState:UIControlStateNormal];
  [findButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  findButton.frame = CGRectMake(buttonWidth * 2, 320.0, buttonWidth, 60.0);
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
  [favButton setTitleColor:[UIColor colorWithRed:(92/255.0) green:(97/255.0) blue:(100/255.0) alpha:1] forState:UIControlStateNormal];
  [favButton setTitleEdgeInsets:UIEdgeInsetsMake(30.0f, 0.0f, 0.0f, 0.0f)];
  favButton.frame = CGRectMake(buttonWidth * 3, 320.0, buttonWidth, 60.0);
  
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

// create the horizontal line & attach to child view
- (void)addHorizontalLine:(CGFloat)posX
{
  CGFloat screenWidth = [[UIScreen mainScreen] bounds].size.width;
  UIView *horizontalLine = [[UIView alloc] initWithFrame:CGRectMake(0, posX, screenWidth, 0.5)];
  horizontalLine.backgroundColor = [UIColor colorWithRed:(145/255.0) green:(150/255.0) blue:(151/255.0) alpha:1];
  [_mainView addSubview:horizontalLine];
}

// create a dynamic label & attach to child view
- (void) addLabelWithFrame: (CGRect) f labelText: (NSString *)text labelSize: (NSInteger)size isbold:(NSInteger)value
{
  UILabel* label = [[UILabel alloc] initWithFrame: f];
  label.adjustsFontSizeToFitWidth = YES;
  if(value) {
    [label setFont:[UIFont fontWithName:@"HelveticaNeue-Bold" size:size]];
  } else {
    [label setFont:[UIFont fontWithName:@"HelveticaNeue" size:size]];
  }
  label.text = text;
  label.textColor = [UIColor colorWithRed:(92/255.0) green:(97/255.0) blue:(100/255.0) alpha:1];
  label.textAlignment = NSTextAlignmentCenter;
  label.lineBreakMode = NSLineBreakByWordWrapping;
  label.numberOfLines = 2;
  label.backgroundColor = [UIColor whiteColor];
  label.userInteractionEnabled = YES;
  [_mainView addSubview: label];
  [_mainView setNeedsDisplay];
}


- (void) addImagewithLabel: (CGRect) f labelText: (NSString *)text labelSize: (NSInteger)size iconName: (NSString *)icon
{
  NSTextAttachment *imageAttachment = [[NSTextAttachment alloc] init];
  imageAttachment.image = [UIImage imageNamed:icon];
  CGFloat imageOffsetY = -13.0;
  imageAttachment.bounds = CGRectMake(0, imageOffsetY, imageAttachment.image.size.width, imageAttachment.image.size.height);
  NSAttributedString *attachmentString = [NSAttributedString attributedStringWithAttachment:imageAttachment];
  NSMutableAttributedString *completeText= [[NSMutableAttributedString alloc] initWithString:@"   "];
  [completeText appendAttributedString:attachmentString];
  NSMutableAttributedString *textAfterIcon= [[NSMutableAttributedString alloc] initWithString:[NSString stringWithFormat:@"  %@", text]];
  [completeText appendAttributedString:textAfterIcon];
  
  UILabel* label = [[UILabel alloc] initWithFrame: f];
  label.adjustsFontSizeToFitWidth = YES;
  [label setFont:[UIFont fontWithName:@"HelveticaNeue" size:size]];
  label.attributedText=completeText;
  label.textColor = [UIColor colorWithRed:(145/255.0) green:(150/255.0) blue:(151/255.0) alpha:1];
  label.backgroundColor = [UIColor whiteColor];
  label.textAlignment = NSTextAlignmentLeft;
  label.numberOfLines = 0;
  
  [_mainView addSubview: label];
  [_mainView setNeedsDisplay];
}

@end
