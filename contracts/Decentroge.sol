// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Decentroge {
    // uint256 public folderId;
    // uint256 public fileId;
    uint256 public userCount = 0;
    // uint256 public platformCount = 0;

    struct File {
        uint256 fileId;
        uint256 fileCount;
        string fileHash;
        uint256 fileSize;
        string fileType;
        string fileName;
        uint256 folderId;
        string fileDescription;
        uint256 uploadTime;
        address sender;
    }

    struct Folder {
        //platform id needed
        uint256 platformId;
        uint256 folderCount;
        uint256 id;
        string folderName;
        File files;
        address owner;
    }

    struct Platform {
        string platformName;
        string token;
        uint256 platform_id;
        uint256 platformCount;
        address user;
    }

    struct User {
        uint256 id;
        address payable _address;
        string image;
        string profile;
        uint256 balance;
    }
    event FolderCreated(uint256 indexed _id, string foldername);
    event FileCreated(
        uint256 indexed fileId,
        uint256 fileCount,
        string fileHash,
        uint256 fileSize,
        string fileType,
        string fileName,
        uint256 folderId,
        string fileDescription,
        uint256 uploadTime,
        address sender
    );
    event UserCreated(
        uint256 id,
        address payable _address,
        string image,
        string profile,
        uint256 balance
    );

    mapping(address => mapping(uint256 => Platform)) public platform;
    mapping(address => mapping(uint256 => Folder)) public folder;
    mapping(address => bool) public registeredUsers;

    mapping(address => uint256) folderCount;
    mapping(address => uint256) fileCount;
    mapping(address => uint256) platformCount;
    mapping(uint256 => mapping(uint256 => File)) file;
    mapping(uint256 => User) users;

    function addPlatform(string memory _platformName, string memory token)
        external
    {
        platformCount[msg.sender] = platformCount[msg.sender] + 1;
        Platform storage _platform = platform[msg.sender][
            platformCount[msg.sender]
        ];
        // require(
        //     keccak256(abi.encodePacked(_platform.platformName)) ==
        //         keccak256(abi.encodePacked(_platformName)),
        //     "Platform name already exisits"
        // );
        _platform.platformName = _platformName;
        _platform.token = token;
        _platform.platform_id = platformCount[msg.sender];
        _platform.platformCount = platformCount[msg.sender];
        _platform.user = msg.sender;
        platform[msg.sender][platformCount[msg.sender]] = _platform;
    }

    function createProfile(string memory _image, string memory _profile)
        public
    {
        if (registeredUsers[msg.sender] == false) {
            userCount++;
            User storage _users = users[userCount];
            require(_users._address == msg.sender, "user already exisit");
            _users.id = userCount;
            _users._address = payable(address(msg.sender));
            _users.image = _image;
            _users.profile = _profile;
            _users.balance = 0;
            registeredUsers[msg.sender] = true;
            users[userCount] = _users;
            emit UserCreated(
                _users.id,
                payable(address(msg.sender)),
                _image,
                _profile,
                _users.balance
            );
        }
    }

    //without validdation
    function createFolder(string memory _foldername, uint256 _platformId)
        public
    {
        folderCount[msg.sender] = folderCount[msg.sender] + 1;
        Folder storage _folder = folder[msg.sender][folderCount[msg.sender]];
        // require(
        //     _folder.platformId == _platformId &&
        //         keccak256(abi.encodePacked(_folder.folderCount)) ==
        //         keccak256(abi.encodePacked(_foldername)),
        //     "Folder name already exisits"
        // );

        _folder.id = folderCount[msg.sender];
        _folder.folderCount = folderCount[msg.sender];
        _folder.folderName = _foldername;
        _folder.platformId = _platformId;
        _folder.owner = msg.sender;
        folder[msg.sender][folderCount[msg.sender]] = _folder;
        emit FolderCreated(_folder.folderCount, _foldername);
    }

    function addFiles(
        uint256 _folderId,
        string memory _fileHash,
        uint256 _fileSize,
        string memory _fileType,
        string memory _fileName,
        string memory _fileDescription
    ) public {
        require(bytes(_fileHash).length > 0);

        require(bytes(_fileType).length > 0);

        // require(bytes(_fileDescription).length > 0);

        require(bytes(_fileName).length > 0);

        require(_fileSize > 0);
        fileCount[msg.sender] = fileCount[msg.sender] + 1;

        File storage _file = file[_folderId][fileCount[msg.sender]];
        // require(
        //     _file.folderId == _folderId &&
        //         keccak256(abi.encodePacked(_file.fileName)) ==
        //         keccak256(abi.encodePacked(_fileName)),
        //     "Folder name already exisits"
        // );
        _file.fileId = fileCount[msg.sender];
        _file.fileCount = fileCount[msg.sender];
        _file.fileHash = _fileHash;
        _file.fileSize = _fileSize;
        _file.fileType = _fileType;
        _file.fileName = _fileName;
        _file.folderId = _folderId;
        _file.fileDescription = _fileDescription;
        _file.uploadTime = block.timestamp;
        _file.sender = msg.sender;
        file[_folderId][fileCount[msg.sender]] = _file;
        emit FileCreated(
            _file.fileId,
            _file.fileCount,
            _file.fileHash,
            _file.fileSize,
            _file.fileType,
            _file.fileName,
            _folderId,
            _file.fileDescription,
            _file.uploadTime,
            msg.sender
        );
    }

    //  my platforms
    function getPlatforms() public view returns (Platform[] memory) {
        uint256 itemCount = platform[msg.sender][platformCount[msg.sender]]
            .platformCount;
        uint256 currentIndex = 0;
        Platform[] memory _platform = new Platform[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            Platform storage currentItem = platform[msg.sender][currentId];
            _platform[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return _platform;
    }

    //get folders
    function getFolders(uint256 _platformId)
        public
        view
        returns (Folder[] memory)
    {
        uint256 itemCount = folder[msg.sender][folderCount[msg.sender]]
            .folderCount;
        uint256 currentIndex = 0;
        Folder[] memory _folder = new Folder[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (folder[msg.sender][i + 1].platformId == _platformId) {
                uint256 currentId = i + 1;
                Folder storage currentItem = folder[msg.sender][currentId];
                _folder[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return _folder;
    }

    //get files
    function getFiles(uint256 _folderId) public view returns (File[] memory) {
        uint256 itemCount = file[_folderId][fileCount[msg.sender]].fileCount;
        uint256 currentIndex = 0;
        File[] memory _file = new File[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            File storage currentItem = file[_folderId][currentId];
            _file[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return _file;
    }

    //get users
    function fetchAllUsers() public view returns (User[] memory) {
        uint256 itemCount = userCount;
        uint256 currentIndex = 0;
        User[] memory items = new User[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;
            User storage currentItem = users[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
        return items;
    }

    //get registered user
    function isRegistered() public view returns (bool) {
        if (registeredUsers[msg.sender] == true) {
            return true;
        } else {
            return false;
        }
    }

    //tipUser
    function tipUser(uint256 id) public payable {
        User storage _users = users[id];
        _users._address.transfer(msg.value);
        _users.balance = _users.balance + msg.value;
        users[id] = _users;
    }
}
