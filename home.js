var num = 0;
var _try = 0;
var failed = 0;
var name = "string";
var p = 0;
var title_num = 0;

var arr_0 = [];
    arr_0[0] = "CPU";
    arr_0[1] = "CU";
    arr_0[2] = "Memory";
    arr_0[3] = "RAM";
    arr_0[4] = "ROM";
    arr_0[5] = "CD-ROM";
    arr_0[6] = "Buffer";
    arr_0[7] = "Bit";

var arr_1 = [];
    arr_1[0] = "Spooler";
    arr_1[1] = "HardCopy";
    arr_1[2] = "LCD";
    arr_1[3] = "PDP";
    arr_1[4] = "Pixel";
    arr_1[5] = "Real Time Processing";
    arr_1[6] = "Linux";
    arr_1[7] = "Deadlock";

var arr_2 = [];
    arr_2[0] = "UNIX";
    arr_2[1] = "Copyright";
    arr_2[2] = "Throughput";
    arr_2[3] = "GNU";
    arr_2[4] = "Assembler";
    arr_2[5] = "C";
    arr_2[6] = "Structured Programming";
    arr_2[7] = "Compiler";   

var arr_3 = [];
    arr_3[0] = "DBMS";
    arr_3[1] = "Hashing";
    arr_3[2] = "HTML";
    arr_3[3] = "LAN";
    arr_3[4] = "Protocol";
    arr_3[5] = "MODEM";
    arr_3[6] = "FTP";
    arr_3[7] = "EDI";  

var arr_4 = [];
    arr_4[0] = "ARPANET";
    arr_4[1] = "Web Browser";
    arr_4[2] = "URL";
    arr_4[3] = "DNS";
    arr_4[4] = "Surfing";
    arr_4[5] = "Firewall";
    arr_4[6] = "Cookie";
    arr_4[7] = "Blog";  

var arr_5 = [];
    arr_5[0] = "API";
    arr_5[1] = "B2C";
    arr_5[2] = "Cache";
    arr_5[3] = "CODEC";
    arr_5[4] = "Computer Network";
    arr_5[5] = "Computer Virus";
    arr_5[6] = "DB";
    arr_5[7] = "DLL";  

var arr_6 = [];
    arr_6[0] = "Big data";
    arr_6[1] = "Machine learning";
    arr_6[2] = "Cloud";
    arr_6[3] = "Wikipedia";
    arr_6[4] = "Internet of Things";
    arr_6[5] = "Augmented Reality";
    arr_6[6] = "Intellectual property rights";
    arr_6[7] = "Copyright";  

var arr_7 = [];
    arr_7[0] = "loading";
    arr_7[1] = "Queue";
    arr_7[2] = "Buffer";
    arr_7[3] = "Real Time Processing";
    arr_7[4] = "Structured Programming";
    arr_7[5] = "EDI";
    arr_7[6] = "Cookie";
    arr_7[7] = "Cache";

var str_0 = [];
    str_0[0] = "() is the brain of a computer, () is where most calculations take place. in terms of computing power, () is the most important element of a computer system. () has three parts ??? an artithmetic logic unit(ALU), a control unit(CU), and a set of registers.";
    str_0[1] = "All the computer???s resources are managed from the (). () fills the role of a traffic cop directing the flow of data";
    str_0[2] = "() is the electronic holding place for instructions and data that your computer???s microprocessor can reach quickly. When your computer is in normal operation, its () usually contains the main parts of the operating system and some or all of the application programs and related data that are being used. () is often used as a shorter synonym for random access memory (RAM), this kind of () is located on one or more microchips that are physically close to the microprocessor in your computer.";
    str_0[3] = "The changeable memory is called (). () aims for holding programs and data while they are in use. () is a type of computer memory that can be accessed randomly, that is any byte of memory can be accessed without touching the preceding bytes.";
    str_0[4] = "() is the acronym for read only memory, computer memory on which data has been prerecorded. Once data has been written onto a () chip, it cannot be removed and can only be read().";
    str_0[5] = "(), a kind of permanent storage, holds item such as data, instruction, and information for future use.";
    str_0[6] = "() is temporary data storage space that hardware or priority order that speed difference is shared by processes of other program. () does data so that each device or process is not stagnant and can act well by function that do temporary storage.";
    str_0[7] = "() means binary digit by standard unit of digital making. from binary to 0 and 1 all number do expression and 0 or 1 is one ()";

var str_1 = [];
    str_1[0] = "() is a software that puts print jobs on a queue while the printer is already in use. This is especially useful when a single printer is being shared by multiple users or when a ingle user send multiple print jobs. while the program in running , the main function of the () is to queue any output requested by peripheral devices, such as printers, and to queue any data inputs requested by other peripheral devices.";
    str_1[1] = "Printed data, called (), exits physically and is more permanent than that presented. ";
    str_1[2] = "() is a display of information on a screen, which uses liquid crystals that become visible when electricity is passed through them. () is an abbreviation for liquid crystal display.";
    str_1[3] = "() puts and embodies gas of neon and so on between 2 chapter???s thin glass board. () is Plasma Display Panel???s abbreviated word.";
    str_1[4] = "() is short for Picture Element. It is a single point in a graphic image. Graphics monitors display pictures by dividing the display screen into thousands (or millions) of ()s, arranged in rows and columns. The ()s are so close together that they appear connected.";
    str_1[5] = "() is defined as the process in which the user???s query is instantaneously answered by the computer.";
    str_1[6] = "() is a freely-distributable open source operating system that runs on a number of hardware platforms. () kernel was developed mainly by Linus Torvalds and it is based on (). Because it???s free, and because it runs on many platforms, including PCs and Macintoshes, () has become an extremely popular alternative to proprietary operating systems.";
    str_1[7] = "() is the clash between two processes requiring resources, or the situation wherein two or more competing processes are waiting for the other to finish, and thus neither ever does. The result is that both processes hang. A situation that two or more processes are unable to proceed because each is waiting for the device in use by program.";

var str_2 = [];
    str_2[0] = "() is a popular multi-user, multitasking operating system developed at Bell Labs in the early 1970s. () was one of the first operating systems to be written is a high-level programming language, namely C.";
    str_2[1] = "() means the ownership on respective works. () is on purpose to encourage authors to open his creative product to the public continuously and to make an environment suitable to creative activities. The piratical information and the trespass of software are representative cases in the invasion of ().";
    str_2[2] = "() is the quantity of work which a computer system can process within a given time.";
    str_2[3] = "() is a UNIX-compatible software system developed by the Free Software Foundation. The philosophy behind () is non-proprietary. Anyone can download, modify and redistribute () software.";
    str_2[4] = "() is a program that translates programs from assembly language to machine language.";
    str_2[5] = "() is a high-level programming language developed by D. ritchie and B. Kernighan at AT&T Bell Labs in the mid 1970s. () was originally designed as system programming language, but now () has been proved to be a general and powerful programming language.";
    str_2[6] = "() makes easier to understand you programming and correction on your computer. Also it is a kind of programming methodology which solves problems methodically to make it easy to check accuracy. () has 3 kinds of control structures which are sequence type, condition type(if~than else etc) and iteration type(for, while, do~while etc).";
    str_2[7] = "() is a program that generates object programs, converting the command of source program into that of machine languages. () is provided by computer manufacturers or software developers, and it is needid by most high-level languages such an C, C++, COBOL, etc.";

var str_3 = [];
    str_3[0] = "() is a collection of programs that enables you to store, modify, and extract information from a database. There are many different types of ()s, ranging from small systems that run on personal computers to huge system that run on mainframes.";
    str_3[1] = "defines key that can do direct access to address of memory device so that can find data stored more fast. () data that store data for quick search of data on table, and change this to address of table, and change this to address of table through suitable function if pay key value of data and want search.";
    str_3[2] = "() is the set of markup symbols or codes inserted in file intended for display on a World Wide Web browser page. That is () is authoring language used to create documents on the World Wide Web. () defines the structure and layout of a Web document by using variety of tags and attributes. Tags are also used to specify hypertext links. These allow Web developers to direct users to other Web pages with only a click of the mouse on either an image or word(s). For a more complete list of tags, check out some of the URLs below.";
    str_3[3] = "() is a group of computers and associated devices that share a common communications line or wireless link. Typically, connected devices share the resources of a single processor or server within a small geographic area (for example, within an office building)";
    str_3[4] = "() is rules governing transmitting and receiving of data in a telecommunication connection when they communicate. () exist at several levels in a telecommunication connection. For example, there are ()s for the data interchange at the hardware device level and ()s for data interchange at the application program level.";
    str_3[5] = "() is a device that modulates an analog carrier signal to encode digital information, and also demodulates such a carrier signal to decode the transmitted information. The goal is to produce a sigmal that can be transmitted easily and decoded to reproduce the original digital date.";
    str_3[6] = "() is the protocol for exchanging files over the Internet. () works in the same way as HTTP for transferring Web pages from a server to a user???s browser and SMTP for transferring electronic mail across the Internet. Like these technologies, () uses the Internet???s TCP/IP protocol to enable data transfer.";
    str_3[7] = "() is the transfer of data between different companies using networks, such as the Internet.() is becoming increasingly important as an easy mechanism for companies to buy, sell and trade information.";

var str_4 = [];
    str_4[0] = "The internet originated from (), which was established in 1969 by Department of Defence in USA.";
    str_4[1] = "() means ???retrieving the information on internet???, and is a kind of user programs that make users receive the information provided from web servers, connecting to internet. The internet sevices, such as transmitting files or e-mail, retrieving the hypertext-type web documents, etc. can be used using the () not to mention retrieving information. Netscape Communicator and Internet Explorer are the very ().";
    str_4[2] = "() is the unique address for a file that is accessible on the Internet. A common way to get to a Web site is to enter the () of its home page file in your Web browser???s address line. () is the global address of documents and other resources on the World Wide Web. The first part of the address indicates what protocol to use, and the second part specifies the IP address or the domain name where the resource is located..";
    str_4[3] = "() is an Internet service that translates domain names into IP addresses. Because domain names are alphabetic, they???re easier to remember , the Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a () service must translate the name into the corresponding IP address.";
    str_4[4] = "() the internet is to move from place to place on the internet searching for topics of interest.";
    str_4[5] = "() is a system designed to prevent unauthorized access to or from a private network. () can be implemented in both hardware and software, or a combination of both. () is frequently used to prevent unauthorized intranet users from accessing private the intranet pass through the (), which examines each message and blocks those that do not meet the specified security criteria.";
    str_4[6] = "() is information that Web site puts an your hard disk so that it can remember something about you at a later time. (More technically, it is information for future use that is stored by the server on the client side of a client/server communication.) Typically, () records your preferences when using a particular site. Using the Web???s Hypertext Transfer Protocol (HTTP), each request for a Web page is independent of all other requests.";
    str_4[7] = "() is the short for Web log. () is a Web page that serves as a publicly accessible personal journal for an individual. Typically updated daily, ()s often reflect the personality of the author.";

var str_5 = [];
    str_5[0] = "() is a set of routines, protocols, and tools for building software applications. A good () makes it easier to develop a program by providing all the building blocks.";
    str_5[1] = "() is the exchange of services, information and/or products from a business to a consumer, as opposed to between one business and another";
    str_5[2] = "() is a special high-speed storage mechanism. It can be either a reserved section of main memory or an independent high-speed storage device. Two types of caching are commonly used in personal computers: memory () and disk ().";
    str_5[3] = "The () is the short for compressor/decompressor. A () is any technology for compressing and decompressing data. ()s can be implemented in software, hardware, or a combination of both. Some popular ()s for computer video include MPEG, Indeo and Cinepak.";
    str_5[4] = "A () is a group of two or more computer systems linked together. ()s can be divided into three broad categories: LAN, MAN, WAN";
    str_5[5] = "A () attaches itself to a program or file so it can spread from one computer to another, leaving infections as it travels.Almost all viruses are attached to an executable file, which means the virus may exist on your computer but it cannot infect your computer unless you run or open the malicious program. It is important to mote that a virus cannot be spread without a human action, (such as running an infected program) to keep it going.";
    str_5[6] = "A () is a file composed of records, each containing fields together with a set of operations for searching, sorting, recombining, and other functions. It is a collection of information organized in such a way that a computer program can quickly select desired pieces of data. Traditional ()s are organized by fields, records, and files. A field is a single piece of information; a record is one complete set of fields; and a file is a collection of records. For example, a telephone book is analogous to a file. It contains a list of records, each of which consists of three fields: name, address, and telephone number.";
    str_5[7] = "() is a library of executable function or data that can be used by a Windows application. Typically, a () provides one or more particular functions and a program accesses the functions by creating either a static or dynamic link to the (). A static link remains constant during program execution while a dynamic link is created by the program as needed. ()s can also contain just data. () files usually end with the extension .dll, .exe, .drv or .fon.";

var str_6 = [];
    str_6[0] = "???????????? ????????? ????????? ?????? ???????????????, ????????? ?????? ?????????????????? ????????????? ????????? ?????? ?????? ?????????, ?????? ?????? ????????? ????????? ????????????, ?????? ?????? ????????? ???????????? ????????? ????????? ?????????. ????????? ???????????? ()?????? ?????????.";
    str_6[1] = "????????? ????????? ????????? ??????????????? ?????? ????????? ????????? ?????????, ??????????????? ????????? ?????? ???????????? ??????, ???????????? ???????????? ????????? ???????????? ?????? ????????? ????????????. (()??? ???????????? ??????????????? ??????????????????.)";
    str_6[2] = "???????????? ??????????????? ????????? ?????????????????? ????????? ?????? ????????? ????????????, ???????????? ??????????????? ?????? ?????? ???????????? ????????? ????????? ??? ?????? ????????? ????????? ????????????.";
    str_6[3] = "??????(Wiki)??? ???????????? ????????? ????????? ????????? ????????? ?????? ??????????????? ????????? ??? ?????? ??? ???????????? ????????????.";
    str_6[4] = "()??? ?????? ??????????????? ???????????? ??????????????? ???????????????. ???, ????????? ?????? ????????? ??????????????? ????????? ????????? ??????, ????????? ?????? ??? ????????? ???????????? ?????? ???????????? ???????????? ????????????????????? ????????????.";
    str_6[5] = "()??? ??????(())??? ???????????? ????????? ??????(??????; ())??? ???????????? ???????????????. ???, ?????? ????????? ???????????? ????????? ????????? ???????????? ???????????? ???????????? ????????? ?????? ?????? ???????????????.";
    str_6[6] = "()??? ??????, ??????, ????????????, ???????????? ??? ????????? ?????? ??????????????? ????????? ????????? ????????? ???????????? ?????? ????????? ????????????.";
    str_6[7] = "()?????? ???????????? ?????? ????????? ????????? ?????? ?????????, ??? ???????????? ?????? ????????? ?????? ???????????????.";

var str_7 = [];
    str_7[0] = "????????? ??????????????? ???????????????????????? ?????????????????? ???????????? ?????? ()????????? ?????????.";
    str_7[1] = "?????? ?????? ????????? ????????? ?????? ?????? ???????????? ?????? ?????? ???????????????.";
    str_7[2] = "() is temporary data storage space that hardware or priority order that speed difference is shared by processes of other program. () does data so that each device or process is not stagnant and can act well by function that do temporary storage.";
    str_7[3] = "() is defined as the process in which the user???s query is instantaneously answered by the computer.";
    str_7[4] = "() makes easier to understand you programming and correction on your computer. Also it is a kind of programming methodology which solves problems methodically to make it easy to check accuracy. () has 3 kinds of control structures which are sequence type, condition type(if~than else etc) and iteration type(for, while, do~while etc).";
    str_7[5] = "() is the transfer of data between different companies using networks, such as the Internet.() is becoming increasingly important as an easy mechanism for companies to buy, sell and trade information.";
    str_7[6] = "() is information that Web site puts an your hard disk so that it can remember something about you at a later time. (More technically, it is information for future use that is stored by the server on the client side of a client/server communication.) Typically, () records your preferences when using a particular site. Using the Web???s Hypertext Transfer Protocol (HTTP), each request for a Web page is independent of all other requests.";
    str_7[7] = "() is a special high-speed storage mechanism. It can be either a reserved section of main memory or an independent high-speed storage device. Two types of caching are commonly used in personal computers: memory cache and disk cache.";

function demo(){
    alert("??? ???????????? ?????????.");
}

function more(){
    window.location = "home_More_1.html";
}

function money(){
    var a = 100000;
    document.getElementById("money").innerHTML = a;
}

window.onload=function(){
    document.getElementById("money").innerHTML = "1988/1/6";
    document.getElementById("howmany").innerHTML = 305;
    document.getElementById("rich").innerHTML = 338;
    document.getElementById("wasabi").innerHTML = 74;
}


function saveValue(){
    var i;
    _try += 1;
    name = document.getElementById("inputValue").value;

    if (p == 0){
        i = arr_0;
    }
    else if(p == 1){
        i = arr_1;
    }
    else if (p == 2){
        i = arr_2;
    }
    else if (p == 3){
        i = arr_3;
    }
    else if (p == 4){
        i = arr_4;
    }
    else if (p == 5){
        i = arr_5;
    }
    else if (p == 6){
        i = arr_6;
    }
    else if (p == 7){
        i = arr_7;
    }
    else if (p == 8){
        if(title_num == 0){
            i = arr_0;
        }
        else if (title_num == 1){
            i = arr_1;
        }
        else if (title_num == 2){
            i = arr_2;
        }
        else if (title_num == 3){
            i = arr_3;
        }
        else if (title_num == 4){
            i = arr_4;
        }
        else if (title_num == 5){
            i = arr_5;
        }
        else if (title_num == 6){
            i = arr_6;
        }
        else if (title_num == 7){
            i = arr_7;
        }
    }

    if (name == i[num]){
        document.getElementById("Q").innerHTML="success!!";   
    }
    else{
        failed += 1;
        document.getElementById("Q").innerHTML="fail!!"; 
    }
    var success = _try - failed;

    document.getElementById("T").innerHTML = "Try : " + _try;
    document.getElementById("S").innerHTML = "Success : " + success;
    document.getElementById("F").innerHTML = "Failed : " + failed;
}

function nextQ(){
    var i;
    if (p == 0){
        i = str_0;
    }
    else if(p == 1){
        i = str_1;
    }
    else if (p == 2){
        i = str_2;
    }
    else if (p == 3){
        i = str_3;
    }
    else if (p == 4){
        i = str_4;
    }
    else if (p == 5){
        i = str_5;
    }
    else if (p == 6){
        i = str_6;
    }
    else if (p == 7){
        i = str_7;
    }
    else if (p == 8){
        title_num = Math.floor(Math.random() * (6 + 1));
        if(title_num == 0){
            i = str_0;
        }
        else if (title_num == 1){
            i = str_1;
        }
        else if (title_num == 2){
            i = str_2;
        }
        else if (title_num == 3){
            i = str_3;
        }
        else if (title_num == 4){
            i = str_4;
        }
        else if (title_num == 5){
            i = str_5;
        }
        else if (title_num == 6){
            i = str_6;
        }
        else if (title_num == 7){
            i = str_7;
        }
    }

    num = Math.floor(Math.random() * (7 + 1));
    document.getElementById("Q").innerHTML=i[num];   
}

function enterSave(){
    if (window.event.keyCode != 13){
        return;
    }
    saveValue();
}

function enterNextQ(){
    if (window.event.keyCode != 13){
        return;
    }
    setTimeout(function(){
        nextQ();
    }, 1000)
}

function page(){
    p += 1
    if (p == 9){
        p = 0;
    }
    document.getElementById("P").innerHTML="p. " + p;
}

