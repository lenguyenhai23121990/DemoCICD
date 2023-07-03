

export interface O_ITEM {
    ID: number
     SOURE_ID: number
     DB_TYPE_ID: number
     BIB_TYPE: string
     MFN : number
     IS_LOCK : number
     CLASS :string
     CUTTER :string
     ISBN : string
     ISBD :string
     AACR2 :string
     LANGUAGE :string
     TITLE :string
     TITLE_SORT :string
     TITLES :string
     TITLES_UNS :string
    AUTHOR :string
     AUTHOR_SORT :string
     AUTHORS :string
     AUTHORS_UNS :string
     YEAR_PUB :number


     BIB_ITEM :number
     BIB_ITEM_UNS :string
     ITEM_DETAIL :string
     QUICK_SEARCH :string
     QUICK_SEARCH_UNS :string
     KEYWORDS :string
     KEYWORDS_UNS :string
     SUBJECTS :string
     SUBJECTS_UNS :string
     PUBLISHER :string
     PUBLISH_PLACE :string
     SUMMARY :string
     COVER_PHOTO :string
     VIEW : number
     DOWNLOAD :number
     IS_ATTACHMENT : number
    Page :number
    PageSize :number
    Is_Unsigned :boolean

    KeywordSearchFondEnd :string
    CateSearchFondEnd :string

    Title_Exactly :boolean
    Author_Exactly :boolean
    Keyword_Exactly:boolean
    Subject_Exactly :boolean
    Yearpub_Exactly :boolean


    FieldSearchType1: string    
    FieldSearchValue1 :string
    FieldSearchCondition1 :string

    FieldSearchType2 :string
    FieldSearchValue2 :string
    FieldSearchCondition2 :string

    FieldSearchType3 :string
    FieldSearchValue3 :string
    FieldSearchCondition3 :string

    CountBookGet: number




    DocNo: number, // Số đến | Số đi| Số Tờ Trình | Số văn bản Nội Bội | Số Phiếu Giao việc
    // SoKyHieu: string, // Số ký hiệu
    ReceivedDate: string, // Ngày đến
    SenderName: string, // Nơi gửi
    Body: string // Trích yếu
    UrgentLevel: string // Độ khẩn
    Download: string, // Tải về
    Editor: string, // Người soạn thảo
    DeptEditor: string, // Phòng soạn thảo
    OrgEditor: string, // Đơn vị soạn thảo
    Created: string, // Ngày tạo | Ngày soạn thảo
    Status: number, // Trạng thái
    // Thêm
    WorfklowID: number, // Quy trình
    ActivityID: string, // Bước xử lý
    SourceItemType: number, // 
    TaskID: number,
    SourceItemID: number, // ID document
    // Phiếu giao việc chờ
    FileID: number;
}

