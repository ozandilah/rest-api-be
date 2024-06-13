PGDMP      ;                |            immob_db     15.1 (Ubuntu 15.1-1.pgdg20.04+1)    16.3 %               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    29170    immob_db    DATABASE     p   CREATE DATABASE immob_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C.UTF-8';
    DROP DATABASE immob_db;
                postgres    false            P           1247    29177    enum_users_userType    TYPE     P   CREATE TYPE public."enum_users_userType" AS ENUM (
    '0',
    '1',
    '2'
);
 (   DROP TYPE public."enum_users_userType";
       public          postgres    false            �            1259    29171    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            �            1259    29225    table_departments    TABLE     �   CREATE TABLE public.table_departments (
    id integer NOT NULL,
    nama_department character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
 %   DROP TABLE public.table_departments;
       public         heap    postgres    false            �            1259    29224    table_departments_id_seq    SEQUENCE     �   CREATE SEQUENCE public.table_departments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.table_departments_id_seq;
       public          postgres    false    218                       0    0    table_departments_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.table_departments_id_seq OWNED BY public.table_departments.id;
          public          postgres    false    217            �            1259    29257    table_jabatans    TABLE       CREATE TABLE public.table_jabatans (
    id integer NOT NULL,
    id_department integer,
    nama_jabatan character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
 "   DROP TABLE public.table_jabatans;
       public         heap    postgres    false            �            1259    29256    table_jabatans_id_seq    SEQUENCE     �   CREATE SEQUENCE public.table_jabatans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.table_jabatans_id_seq;
       public          postgres    false    220                       0    0    table_jabatans_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.table_jabatans_id_seq OWNED BY public.table_jabatans.id;
          public          postgres    false    219            �            1259    29278    table_karyawans    TABLE     y  CREATE TABLE public.table_karyawans (
    id integer NOT NULL,
    id_jabatan integer,
    name character varying(255),
    age integer,
    gender character varying(255),
    tanggal_lahir date,
    alamat character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
 #   DROP TABLE public.table_karyawans;
       public         heap    postgres    false            �            1259    29277    table_karyawans_id_seq    SEQUENCE     �   CREATE SEQUENCE public.table_karyawans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.table_karyawans_id_seq;
       public          postgres    false    222                       0    0    table_karyawans_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.table_karyawans_id_seq OWNED BY public.table_karyawans.id;
          public          postgres    false    221            �            1259    29202    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    "userType" public."enum_users_userType",
    "firstName" character varying(255),
    "lastName" character varying(255),
    email character varying(255),
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false    848            �            1259    29201    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            `           2604    29228    table_departments id    DEFAULT     |   ALTER TABLE ONLY public.table_departments ALTER COLUMN id SET DEFAULT nextval('public.table_departments_id_seq'::regclass);
 C   ALTER TABLE public.table_departments ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            a           2604    29260    table_jabatans id    DEFAULT     v   ALTER TABLE ONLY public.table_jabatans ALTER COLUMN id SET DEFAULT nextval('public.table_jabatans_id_seq'::regclass);
 @   ALTER TABLE public.table_jabatans ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            b           2604    29281    table_karyawans id    DEFAULT     x   ALTER TABLE ONLY public.table_karyawans ALTER COLUMN id SET DEFAULT nextval('public.table_karyawans_id_seq'::regclass);
 A   ALTER TABLE public.table_karyawans ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            _           2604    29205    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    29171    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    214   �+                  0    29225    table_departments 
   TABLE DATA           g   COPY public.table_departments (id, nama_department, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    218   S,                 0    29257    table_jabatans 
   TABLE DATA           p   COPY public.table_jabatans (id, id_department, nama_jabatan, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    220   �,                 0    29278    table_karyawans 
   TABLE DATA           �   COPY public.table_karyawans (id, id_jabatan, name, age, gender, tanggal_lahir, alamat, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    222   K-       �          0    29202    users 
   TABLE DATA           �   COPY public.users (id, "userType", "firstName", "lastName", email, password, "createdAt", "updatedAt", "deletedAt") FROM stdin;
    public          postgres    false    216   �-                  0    0    table_departments_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.table_departments_id_seq', 2, true);
          public          postgres    false    217                       0    0    table_jabatans_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.table_jabatans_id_seq', 2, true);
          public          postgres    false    219                       0    0    table_karyawans_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.table_karyawans_id_seq', 3, true);
          public          postgres    false    221                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    215            d           2606    29175     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    214            h           2606    29230 (   table_departments table_departments_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.table_departments
    ADD CONSTRAINT table_departments_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.table_departments DROP CONSTRAINT table_departments_pkey;
       public            postgres    false    218            j           2606    29262 "   table_jabatans table_jabatans_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.table_jabatans
    ADD CONSTRAINT table_jabatans_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.table_jabatans DROP CONSTRAINT table_jabatans_pkey;
       public            postgres    false    220            l           2606    29285 $   table_karyawans table_karyawans_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.table_karyawans
    ADD CONSTRAINT table_karyawans_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.table_karyawans DROP CONSTRAINT table_karyawans_pkey;
       public            postgres    false    222            f           2606    29209    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    216            m           2606    29263 0   table_jabatans table_jabatans_id_department_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.table_jabatans
    ADD CONSTRAINT table_jabatans_id_department_fkey FOREIGN KEY (id_department) REFERENCES public.table_departments(id);
 Z   ALTER TABLE ONLY public.table_jabatans DROP CONSTRAINT table_jabatans_id_department_fkey;
       public          postgres    false    3176    220    218            �   ^   x�U�;�  Н�@j+�a\�v�O�o�`��C��@@ ڥ�ػJq�l04UN��U..zȩ݌a�g���g�&����qy����1Ү.	          x   x�m�;�0 �99EvT�v�xD��tA!D�"~秬��I���U��y8^��ΗV��1�t�:��E4a�����"P�/�{�n3GC;�my�:����Pd���$P�Gɸ�y&?����^(�         `   x�m�!�0�a��Oִ�(]@�A!gA`v	����q���h��$G��i sʞ��H�QV�M�fC�W@��u��Y]
&�~�Qݠ" <'s�         �   x��ͻ
�@��z�)��3go�B*�l��`@"l|z#���|p~�:P�n�6u};��v&��XQ��8��i��D���\%d�9lD>)(��*>sHۅH_�_�i�r�_9�J�g��n:�ѭ����1��%F9      �   �   x��νr�0  �9<�[�4		䘪�J)"�\�oBM�R�>}�����[>0xk%���,��YZ��F��1�>�F�=�G|R����F�V��:�4s�KT�Ԧ�`պӢ�Zw�Ү>~ ��X<�""t��9f�ƌ�4���;�n�.��?��/�"yݪe��}�]z�}��������	�����˾�3� 2\�诸����zZq     