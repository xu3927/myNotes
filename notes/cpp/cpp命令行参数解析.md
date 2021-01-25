# cpp命令行参数解析

## getopt_long 函数

```cpp
int getopt_long(int argc, char * const argv[],const char *optstring,const struct option *longopts, int *longindex);
```

```cpp
struct option
{
    const char *name;    //表示的是长选项名
    int         has_arg; 
    //has_arg有3个值，no_argument(或者是0)，表示该参数后面不跟参数值
    // required_argument(或者是1),表示该参数后面一定要跟个参数值
    // optional_argument(或者是2),表示该参数后面可以跟，也可以不跟参数值
    int        *flag;    //用来决定，getopt_long()的返回值到底是什么。如果flag是null(通常情况)，则函数会返回与该项option匹配的val值;如果flag不是NULL，则将val值赋予flag所指向的内存，并且返回值设置为0。
    int val; //和flag联合决定返回值
};
```
1. argc和argv和main函数的两个参数一致。

2. optstring: 表示短选项字符串。

    形式如“a:b::cd:“，分别表示程序支持的命令行短选项有-a、-b、-c、-d，冒号含义如下：
    (1)只有一个字符，不带冒号——只表示选项， 如-c 
    (2)一个字符，后接一个冒号——表示选项后面带一个参数，如-a 100
    (3)一个字符，后接两个冒号——表示选项后面带一个可选参数，即参数可有可无， 如果带参数，则选项与参数直接不能有空格
        形式应该如-b200

3. longopts：表示长选项结构体。结构如下：

(1)name:表示选项的名称,比如daemon,dir,out等。

(2)has_arg:表示选项后面是否携带参数。该参数有三个不同值，如下：

        a:  no_argument(或者是0)时   ——参数后面不跟参数值，eg: --version,--help
        b: required_argument(或者是1)时 ——参数输入格式为：--参数 值 或者 --参数=值。eg:--dir=/home
        c: optional_argument(或者是2)时  ——参数输入格式只能为：--参数=值
(3)flag:这个参数有两个意思，空或者非空。

        a:如果参数为空NULL，那么当选中某个长选项的时候，getopt_long将返回val值。
                eg，可执行程序 --help，getopt_long的返回值为h.             
        b:如果参数不为空，那么当选中某个长选项的时候，getopt_long将返回0，并且将flag指针参数指向val值。

                eg: 可执行程序 --http-proxy=127.0.0.1:80 那么getopt_long返回值为0，并且lopt值为1。

(4)val：表示指定函数找到该选项时的返回值，或者当flag非空时指定flag指向的数据的值val。

4. longindex：longindex非空，它指向的变量将记录当前找到参数符合longopts里的第几个元素的描述，即是longopts的下标值。

5. 全局变量：

        （1）optarg：表示当前选项对应的参数值。

        （2）optind：表示的是下一个将被处理到的参数在argv中的下标值。

        （3）opterr：如果opterr = 0，在getopt、getopt_long、getopt_long_only遇到错误将不会输出错误信息到标准输出流。opterr在非0时，向屏幕输出错误。

        （4）optopt：表示没有被未标识的选项。

6. 返回值：

         （1）如果短选项找到，那么将返回短选项对应的字符。

         （2）如果长选项找到，如果flag为NULL，返回val。如果flag不为空，返回0

         （3）如果遇到一个选项没有在短字符、长字符里面。或者在长字符里面存在二义性的，返回“？”

         （4）如果解析完所有字符没有找到（一般是输入命令参数格式错误，eg： 连斜杠都没有加的选项），返回“-1”

         （5）如果选项需要参数，忘了添加参数。返回值取决于optstring，如果其第一个字符是“：”，则返回“：”，否则返回“？”。
注意：

        （1）longopts的最后一个元素必须是全0填充，否则会报段错误

        （2）短选项中每个选项都是唯一的。而长选项如果简写，也需要保持唯一性。



## demo

```cpp
#include <getopt.h>
#include <iostream>
 
int num = -1;
bool is_beep = false;
float sigma = 2.034;
std::string name = "";

std::string write_file = "default_file.txt";
 
void PrintHelp()
{
    std::cout <<
            "--num <n>:           Set number of program\n"
            "--name <string>:     Set name of program\n"
            "--beep:              Beep the user\n"
            "--sigma <val>:       Set sigma of program\n"
            "--writeFile <fname>: File to write to\n"
            "--param1 <val>: 	  Param1 is to\n"
            "--help:              Show help\n";
    exit(1);
}
 
void ProcessArgs(int argc, char** argv)
{
    const char* const short_opts = "n:bs:w:h";
    const option long_opts[] = {
            {"num", required_argument, nullptr, 'n'},
            {"beep", no_argument, nullptr, 'b'},
            {"name", required_argument, nullptr, 'm'},
            {"sigma", required_argument, nullptr, 's'},
            {"writeFile", required_argument, nullptr, 'w'},
            {"param1", required_argument, nullptr, 1},
            {"param2", required_argument, nullptr, 2},
            {"param3", required_argument, nullptr, 3},
            {"help", no_argument, nullptr, 'h'},
            {nullptr, no_argument, nullptr, 0}
    };
 
    while (true)
    {
        const char opt = getopt_long(argc, argv, short_opts, long_opts, nullptr);
 
        if (-1 == opt)
            break;
 
        switch (opt)
        {

        case 'n':
            num = std::stoi(optarg);
            std::cout << "Num set to: " << num << std::endl;
            break;
 		case 'm':
 		 	name = optarg;
            std::cout << "Name set to: " << name << std::endl;
            break;
  		case 'e':
            name = optarg;
            std::cout << "Name set to: " << name << std::endl;
            break;
 
        case 'b':
            is_beep = true;
            std::cout << "Beep is set to true\n";
            break;
 
        case 's':
            sigma = std::stof(optarg);
            std::cout << "Sigma set to: " << sigma << std::endl;
            break;
 
        case 'w':
            write_file = std::string(optarg);
            std::cout << "Write file set to: " << write_file << std::endl;
            break;
 		case 1:
 			 std::cout << "参数1是: " << optarg << std::endl;
 			  break;
		case 2:		
 			 std::cout << "参数2是: " << optarg << std::endl;
 			  break;
        case 'h': // -h or --help
        case '?': // Unrecognized option
        default:
            PrintHelp();
            break;
        }
    }
}
 
int main(int argc, char **argv)
{
    ProcessArgs(argc, argv);
    return 0;
}
```

## 参考资料

- [浅谈linux的命令行解析参数之getopt_long函数
](https://blog.csdn.net/qq_33850438/article/details/80172275)
