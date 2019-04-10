#import <Foundation/Foundation.h>
#import "RestaurantDetails.h"

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
  UIView *_childView;
}

- (instancetype)initWithEventDispatcher:(RCTEventDispatcher *)eventDispatcher
{
  if ((self = [super init])) {
    
    _eventDispatcher = eventDispatcher;
    
    // init childview (full screen)
    _childView = [[UIView alloc] initWithFrame:CGRectMake(0,0, [[UIScreen mainScreen] applicationFrame].size.width, [[UIScreen mainScreen] applicationFrame].size.height)];
    _childView.backgroundColor = [UIColor blueColor];
  }
    
  return self;
}

// add the childview to the RestaurantDetails UIView (parent)
- (void)layoutSubviews
{
  [super layoutSubviews];
  _childView.frame = self.bounds;
  [self addSubview:_childView];
}

// load url string from props
- (void)setUrl:(NSString *)url
{
  if(![url isEqual:_url]) {
    _url = [url copy];
    [self addTextView: _url];
  }
}

// add image
// https://stackoverflow.com/questions/30096806/load-uiimage-from-url-in-ios

- (void)addTextView:(NSString *)text
{
  UILabel *textLabel = [[UILabel alloc] initWithFrame:CGRectMake(100, 100, 300, 300)];
  //textLabel.backgroundColor = [UIColor yellowColor];
  textLabel.text = text;
  textLabel.textColor = [UIColor whiteColor];
  [textLabel sizeToFit];
  [_childView addSubview:textLabel];
  [_childView setNeedsDisplay];
}

@end
